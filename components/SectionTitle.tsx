import clsx from 'clsx'
import { useMemo } from 'react'

interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  firstLetterClassName?: string
}

export const TitleSkew: React.FC<SectionTitle> = ({
  title,
  firstLetterClassName = 'before:to-slate-300',
}) => {
  const titleRender = useMemo(
    () =>
      Array.from(title).map((character, index) => {
        const key = `${character}-${index}`

        if (index !== 0) {
          return character
        }

        return (
          <span
            key={key}
            className={`relative before:inset-0 before:absolute before:bg-gradient-to-br before:from-slate-100 ${firstLetterClassName} dark:before:from-slate-800 dark:before:to-slate-700 before:-z-1 before:-mx-2 before:rounded-lg before:skew-x-8`}
          >
            {character.trim().length > 0 ? character : '\u00a0'}
          </span>
        )
      }),
    [title, firstLetterClassName]
  )

  return <>{titleRender}</>
}

const SectionTitle: React.FC<SectionTitle> = ({
  title,
  className,
  firstLetterClassName = 'before:to-slate-300',
  ...rest
}) => {
  return (
    <div className={clsx('mb-12 grid place-content-center', className)}>
      <h2 className="relative text-4xl md:text-5xl font-extrabold" {...rest}>
        <TitleSkew title={title} firstLetterClassName={firstLetterClassName} />
      </h2>
    </div>
  )
}

export default SectionTitle
