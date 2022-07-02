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

export default function Code({ codeString, language, filename }: CodeProps) {
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
        <aside className="relative -mx-4 overflow-hidden rounded-conditional border border-slate-600 bg-slate-800 font-mono tracking-normal shadow-md">
          <header className="relative grid auto-cols-auto grid-flow-col items-center justify-start border-b border-slate-600">
            <div className="grid auto-cols-max grid-flow-col gap-2 self-center p-4">
              <div className="h-3 w-3 rounded-full bg-rose-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            {filename && (
              <div className="relative">
                <div className="whitespace-nowrap p-4 text-sm text-slate-100">
                  {filename}
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-br from-blue-500 to-indigo-700" />
              </div>
            )}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-slate-400">
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
            <div className="grid max-h-120 auto-cols-auto grid-flow-col justify-start overflow-auto overscroll-contain">
              <div className="sticky left-0 z-10 select-none rounded-bl-conditional border-slate-600 bg-slate-800 p-4 text-right text-slate-100/50">
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
