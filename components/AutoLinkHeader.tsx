import slugify from 'slugify'

interface AutoLinkHeaderProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const AutoLinkHeader: React.FC<
  AutoLinkHeaderProps & React.HTMLAttributes<HTMLHeadingElement>
> = ({ as: Component, children, ...rest }) => {
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
