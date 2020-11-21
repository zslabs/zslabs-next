import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import clsx from 'clsx'

export default function Code({ codeString, language, wrapperClassName }) {
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
            'rounded-lg bg-gray-800 ring-4 ring-white ring-opacity-10 font-mono',
            wrapperClassName
          )}
        >
          <header className="p-4 border-b-2 border-white border-opacity-10 grid gap-2 auto-cols-max grid-flow-col">
            <div className="w-3 h-3 border-2 rounded-full border-red-500" />
            <div className="w-3 h-3 border-2 rounded-full border-yellow-500" />
            <div className="w-3 h-3 border-2 rounded-full border-green-500" />
          </header>
          <pre className={className}>
            <div className="grid grid-flow-col auto-cols-min">
              <div className="p-4 bg-gray-900 rounded-bl-lg border-r border-white border-opacity-10 text-right text-white text-opacity-75 select-none sticky left-0 z-10">
                {tokens.map((line, i) => (
                  <div key={line}>{i + 1}</div>
                ))}
              </div>
              <div className="text-white p-4">
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
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
}
