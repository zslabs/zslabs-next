interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'blue' | 'red' | 'purple'
}

const SectionTitle: React.FC<SectionTitle> = ({ title, ...rest }) => {
  return (
    <div className="mb-12 grid place-content-center">
      <h2 className="font-serif text-4xl font-extrabold md:text-5xl" {...rest}>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
