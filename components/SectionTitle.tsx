import { useMemo } from 'react'

import clsx from 'clsx'

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
              'relative before:inset-0 before:absolute before:bg-gradient-to-br before:from-slate-1 before:-z-1 before:-mx-2 before:rounded-lg before:skew-x-8',
              {
                'before:to-slate-4': variation === 'default',
                'before:to-primary-3': variation === 'blue',
                'before:to-danger-3': variation === 'red',
                'before:to-accent-3': variation === 'purple',
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
      <h2 className="relative text-4xl md:text-5xl font-bold" {...rest}>
        <TitleSkew title={title} variation={variation} />
      </h2>
    </div>
  )
}

export default SectionTitle
