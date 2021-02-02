import slugify from 'slugify'

interface AutoLinkHeaderProps {
  as?: React.ElementType
  className?: string
}

const AutoLinkHeader: React.FC<AutoLinkHeaderProps> = ({
  as: Component,
  children,
  ...rest
}) => {
  return (
    <Component
      id={slugify(children.toString(), {
        lower: true,
        locale: 'en',
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default AutoLinkHeader
