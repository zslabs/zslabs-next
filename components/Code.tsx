import * as React from 'react'

import type { Language } from 'prism-react-renderer'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ReactComponent as ClipboardCheckSvg } from '~icons/clipboard-check.svg'
import { ReactComponent as ClipboardSvg } from '~icons/clipboard.svg'

interface CodeProps {
  codeString: string
  language?: Language
  filename?: string
}

export default function Code({
  codeString,
  language,
  filename,
}: CodeProps): React.ReactElement {
  const [isCopied, setCopied] = React.useState(false)

  // Reset icon after 3 seconds
  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => setCopied(false), 3000)
    }
  }, [isCopied])

  const handleCopy = React.useCallback(() => setCopied(true), [])

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={codeString}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <aside className="relative bg-slate-800 font-mono rounded-conditional overflow-hidden shadow-md tracking-normal border border-slate-600 -mx-4">
          <header className="relative border-b border-slate-600 grid auto-cols-auto grid-flow-col justify-start items-center">
            <div className="p-4 grid gap-2 auto-cols-max grid-flow-col self-center">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            {filename && (
              <div className="relative">
                <div className="p-4 text-sm text-slate-100 whitespace-nowrap">
                  {filename}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-br from-blue-500 to-indigo-700 h-0.5" />
              </div>
            )}
            <div className="text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
              {isCopied ? (
                <ClipboardCheckSvg />
              ) : (
                <CopyToClipboard text={codeString} onCopy={handleCopy}>
                  <button
                    type="button"
                    className="block focus:outline-none"
                    title="Copy snippet"
                  >
                    <ClipboardSvg />
                  </button>
                </CopyToClipboard>
              )}
            </div>
          </header>
          <pre className={className}>
            <div className="grid grid-flow-col auto-cols-auto justify-start overflow-auto max-h-120">
              <div className="p-4 rounded-bl-conditional bg-slate-800 border-slate-600 text-right text-slate-100/50 select-none sticky left-0 z-10">
                {tokens.map((_, i) => {
                  const lineKey = `line-${i}`

                  return <div key={lineKey}>{i + 1}</div>
                })}
              </div>
              <div className="text-slate-100 p-4">
                {tokens.map((line, i) => {
                  const lineKey = `line-${i}`

                  return (
                    <div key={lineKey} {...getLineProps({ line, key: i })}>
                      {line.length === 1 && line[0].empty === true && (
                        <span>&#8203;</span>
                      )}
                      {line.map((token, index) => {
                        const key = `line-${index}`

                        return (
                          <span
                            key={key}
                            {...getTokenProps({ token, index })}
                          />
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </pre>
        </aside>
      )}
    </Highlight>
  )
}
