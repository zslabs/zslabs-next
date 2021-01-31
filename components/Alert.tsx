import clsx from 'clsx'

interface AlertProps {
  className?: string
  variation?: 'primary' | 'danger'
}

const Alert: React.FC<AlertProps> = ({
  className,
  variation = 'primary',
  ...rest
}) => {
  return (
    <aside
      className={clsx(
        'Alert border-l-8 rounded-lg p-6 my-8',
        {
          'border-blue-500 bg-blue-100': variation === 'primary',
          'border-red-500 bg-red-100': variation === 'danger',
        },
        className
      )}
      {...rest}
    />
  )
}

export default Alert
