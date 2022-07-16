interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'blue' | 'red' | 'purple'
}

const SectionTitle: React.FC<SectionTitle> = ({ title, ...rest }) => {
  return (
    <h2 className="mb-12 font-serif text-6xl font-bold md:text-7xl" {...rest}>
      {title}
    </h2>
  )
}

export default SectionTitle
