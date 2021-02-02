import clsx from 'clsx'
import { forwardRefWithAs } from '@reach/utils'

interface SectionProps {
  as?: React.ElementType
}

const Section = forwardRefWithAs<SectionProps, 'section'>(
  ({ as: Component = 'section', className, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx('py-8 md:py-12', className)}
        {...rest}
      />
    )
  }
)

export default Section
