import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import clsx from 'clsx'

export default function Code({
  codeString,
  language,
  filename,
  wrapperClassName,
}) {
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
            'relative bg-gray-800 font-mono rounded-lg overflow-hidden',
            wrapperClassName
          )}
        >
          <header className="border-b-2 bg-gray-900 border-gray-600 grid auto-cols-min grid-flow-col content-center">
            <div className="p-4 grid gap-2 auto-cols-max grid-flow-col self-center">
              <div className="w-3 h-3 border-2 rounded-full border-red-500" />
              <div className="w-3 h-3 border-2 rounded-full border-yellow-500" />
              <div className="w-3 h-3 border-2 rounded-full border-green-500" />
            </div>
            {filename && (
              <div className="relative">
                <div className="p-4 text-sm text-gray-100">{filename}</div>
                <div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-tr from-blue-500 to-indigo-700"
                  style={{ height: 2 }}
                />
              </div>
            )}
          </header>
          <pre className={className}>
            <div className="grid grid-flow-col auto-cols-min overflow-auto">
              <div className="p-4 bg-gray-800 border-r-2 border-gray-600 text-right text-white text-opacity-40 select-none sticky left-0 z-10">
                {tokens.map((line, i) => {
                  const lineKey = `line-${i}`

                  return <div key={lineKey}>{i + 1}</div>
                })}
              </div>
              <div className="text-white p-4">
                {tokens.map((line, i) => {
                  const lineKey = `line-${i}`

                  return (
                    <div key={lineKey} {...getLineProps({ line, key: i })}>
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

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
  filename: PropTypes.string,
}
