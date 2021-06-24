import * as React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import clsx from 'clsx'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ReactComponent as ClipboardSvg } from '~icons/clipboard.svg'
import { ReactComponent as ClipboardCheckSvg } from '~icons/clipboard-check.svg'

interface CodeProps {
  codeString: string
  language?: Language
  filename?: string
  wrapperClassName?: string
}

export default function Code({
  codeString,
  language,
  filename,
  wrapperClassName,
}: CodeProps): React.ReactElement {
  const [isCopied, setCopied] = React.useState(false)

  // Reset icon after 3 seconds
  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => setCopied(false), 3000)
    }
  }, [isCopied])

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={codeString}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <aside
          className={clsx(
            'relative bg-gray-800 font-mono rounded-lg overflow-hidden ring-4 ring-gray-900 dark:ring-gray-600 ring-opacity-25',
            wrapperClassName
          )}
        >
          <header className="relative border-b-2 bg-gray-900 border-gray-600 grid auto-cols-auto grid-flow-col justify-start items-center">
            <div className="p-4 grid gap-2 auto-cols-max grid-flow-col self-center">
              <div className="w-3 h-3 border-2 rounded-full border-red-500" />
              <div className="w-3 h-3 border-2 rounded-full border-yellow-500" />
              <div className="w-3 h-3 border-2 rounded-full border-green-500" />
            </div>
            {filename && (
              <div className="relative">
                <div className="p-4 text-sm text-gray-100 whitespace-nowrap">
                  {filename}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-tr from-blue-500 to-indigo-700 h-0.5" />
              </div>
            )}
            <div className="text-gray-400 absolute right-4 top-1/2 -translate-y-1/2">
              {isCopied ? (
                <ClipboardCheckSvg className="w-6 h-6" />
              ) : (
                <CopyToClipboard
                  text={codeString}
                  onCopy={() => setCopied(true)}
                >
                  <button
                    type="button"
                    className="block focus:outline-none"
                    title="Copy snippet"
                  >
                    <ClipboardSvg className="w-6 h-6" />
                  </button>
                </CopyToClipboard>
              )}
            </div>
          </header>
          <pre className={className}>
            <div className="grid grid-flow-col auto-cols-auto justify-start overflow-auto max-h-120">
              <div className="p-4 bg-gray-800 border-r-2 border-gray-600 text-right text-gray-100 text-opacity-40 select-none sticky left-0 z-10">
                {tokens.map((line, i) => {
                  const lineKey = `line-${i}`

                  return <div key={lineKey}>{i + 1}</div>
                })}
              </div>
              <div className="text-gray-100 p-4">
                {tokens.map((line, i) => {
                  const lineKey = `line-${i}`

                  return (
                    <div key={lineKey} {...getLineProps({ line, key: i })}>
                      {line.length === 1 && line[0].empty === true && (
                        <span>&#8203;</span>
                      )}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
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
