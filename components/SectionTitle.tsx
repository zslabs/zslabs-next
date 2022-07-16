interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'blue' | 'red' | 'purple'
}

const SectionTitle: React.FC<SectionTitle> = ({ title, ...rest }) => {
  return (
    <h2 className="mb-12 text-4xl font-bold md:text-5xl" {...rest}>
      {title}
    </h2>
  )
}

export default SectionTitle
