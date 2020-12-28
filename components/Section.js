import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Section({
  as: Component = 'section',
  className,
  ...rest
}) {
  return <Component className={clsx('py-8 md:py-12', className)} {...rest} />
}

Section.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
}
