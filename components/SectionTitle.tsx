import clsx from 'clsx'
import { useMemo } from 'react'

interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'blue' | 'red' | 'purple'
}

export const TitleSkew: React.FC<SectionTitle> = ({
  title,
  variation = 'default',
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
            className={clsx(
              'relative before:inset-0 before:absolute before:bg-gradient-to-br before:from-slate-100 dark:before:from-slate-800 dark:before:to-slate-700 before:-z-1 before:-mx-2 before:rounded-lg before:skew-x-8',
              {
                'before:to-slate-300': variation === 'default',
                'before:to-blue-200': variation === 'blue',
                'before:to-rose-200': variation === 'red',
                'before:to-indigo-200': variation === 'purple',
              }
            )}
          >
            {character.trim().length > 0 ? character : '\u00a0'}
          </span>
        )
      }),
    [title, variation]
  )

  return <>{titleRender}</>
}

const SectionTitle: React.FC<SectionTitle> = ({
  title,
  variation = 'default',
  ...rest
}) => {
  return (
    <div className="mb-12 grid place-content-center">
      <h2 className="relative text-4xl md:text-5xl font-extrabold" {...rest}>
        <TitleSkew title={title} variation={variation} />
      </h2>
    </div>
  )
}

export default SectionTitle
