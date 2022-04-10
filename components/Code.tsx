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
        <aside className="overflow-hidden relative -mx-4 font-mono tracking-normal bg-slate-800 rounded-conditional border border-slate-600 shadow-md">
          <header className="grid relative grid-flow-col auto-cols-auto justify-start items-center border-b border-slate-600">
            <div className="grid grid-flow-col auto-cols-max gap-2 self-center p-4">
              <div className="w-3 h-3 bg-rose-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
            {filename && (
              <div className="relative">
                <div className="p-4 text-sm text-slate-100 whitespace-nowrap">
                  {filename}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-blue-500 to-indigo-700" />
              </div>
            )}
            <div className="absolute top-1/2 right-4 text-2xl text-slate-400 -translate-y-1/2">
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
            <div className="grid overflow-auto grid-flow-col auto-cols-auto justify-start max-h-120">
              <div className="sticky left-0 z-10 p-4 text-right text-slate-100/50 bg-slate-800 rounded-bl-conditional border-slate-600 select-none">
                {tokens.map((_, i) => {
                  const lineKey = `line-${i}`

                  return <div key={lineKey}>{i + 1}</div>
                })}
              </div>
              <div className="p-4 text-slate-100">
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
