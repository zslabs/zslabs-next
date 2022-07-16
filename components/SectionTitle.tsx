import ctl from '@netlify/classnames-template-literals'

interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'blue' | 'red' | 'purple'
  align?: 'left' | 'center'
}

const SectionTitle: React.FC<SectionTitle> = ({
  align = 'center',
  title,
  ...rest
}) => {
  return (
    <h2
      {...rest}
      className={ctl(`
        mb-12 text-5xl font-bold

        ${align === 'left' && 'text-left'}
        ${align === 'center' && 'text-center'}
      `)}
    >
      {title}
    </h2>
  )
}

export default SectionTitle
