import clsx from 'clsx'

interface SectionTitleSkewProps {
  className?: string
}

export const SectionTitleSkew: React.FC<SectionTitleSkewProps> = ({
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

interface SectionTitleProps {
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
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
