import clsx from 'clsx'

export const SectionTitleSkew: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  className,
  ...rest
}) => {
  return (
    <span
      className={clsx(
        '-z-1 absolute transform -translate-x-3 block bg-gradient-to-br w-8 h-8',
        className
      )}
      {...rest}
    />
  )
}

const SectionTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx('mb-12', className)}>
      <h2 className="relative text-4xl md:text-5xl font-extrabold" {...rest}>
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
