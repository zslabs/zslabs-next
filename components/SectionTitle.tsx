import { useMemo } from 'react'

import ctl from '@netlify/classnames-template-literals'

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
            className={ctl(`
              relative before:absolute before:inset-0 before:-z-1 before:-mx-2 before:skew-x-8 before:rounded-lg before:bg-gradient-to-br before:from-slate-100 dark:before:from-slate-800 dark:before:to-slate-700

              ${variation === 'default' && 'before:to-slate-300'}
              ${variation === 'blue' && 'before:to-blue-200'}
              ${variation === 'red' && 'before:to-rose-200'}
              ${variation === 'purple' && 'before:to-indigo-200'}
            `)}
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
      <h2 className="relative text-4xl font-bold md:text-5xl" {...rest}>
        <TitleSkew title={title} variation={variation} />
      </h2>
    </div>
  )
}

export default SectionTitle
