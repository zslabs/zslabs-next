import PropTypes from 'prop-types'
import clsx from 'clsx'

export function SectionTitleSkew({ className, ...rest }) {
  return (
    <span
      className={clsx(
        '-z-1 absolute transform -translate-x-2 block bg-gradient-to-br w-8 h-8',
        className
      )}
      {...rest}
    />
  )
}

SectionTitleSkew.propTypes = {
  className: PropTypes.string,
}

export default function SectionTitle({ children, className, ...rest }) {
  return (
    <h2
      className={clsx(
        'relative text-4xl md:text-5xl font-extrabold mb-12',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}
SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
