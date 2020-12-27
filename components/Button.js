import PropTypes from 'prop-types'
import clsx from 'clsx'

import diagonalLines from '~media/diagonal-lines.svg'

export default function Button({
  children,
  className,
  variation,
  iconOnly,
  loading,
  ...rest
}) {
  return (
    <button
      type="button"
      className={clsx(
        'relative inline-block h-12 bg-gradient-to-br rounded-full text-gray-100 tracking-widest uppercase font-extrabold text-sm shadow-lg duration-300 ease-bounce transform hover:scale-105 ring-4 ring-opacity-10 focus:outline-none focus:ring-opacity-20',
        className,
        {
          'from-indigo-700 to-blue-500 ring-indigo-700':
            variation === 'primary',
          'from-green-400 to-cyan-500 ring-green-400':
            variation === 'secondary',
          'from-gray-800 to-gray-600 ring-gray-800': variation === 'tertiary',
          'from-orange-400 to-pink-600 ring-orange-400':
            variation === 'quaternary',
          'px-6': !iconOnly,
          'w-12': iconOnly,
          'pointer-events-none opacity-50': loading,
        }
      )}
      {...rest}
    >
      <span
        className={clsx(
          'relative z-10 grid place-items-center gap-4 grid-flow-col whitespace-nowrap',
          {
            'auto-cols-min': !iconOnly,
            'auto-cols-auto': iconOnly,
          }
        )}
      >
        {children}
      </span>
      <span
        className="absolute z-0 inset-1"
        style={{ backgroundImage: `url(${diagonalLines})` }}
      />
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  iconOnly: PropTypes.bool,
  variation: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  loading: PropTypes.bool,
}
