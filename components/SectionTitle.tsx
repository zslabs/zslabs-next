import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface SectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  variation?: 'default' | 'primary' | 'danger' | 'accent' | 'secondary'
}

export const TitleSkew: React.FC<SectionTitle> = ({
  title,
  variation = 'default',
}) => {
  const titleRender = React.useMemo(
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
              relative before:absolute before:inset-0 before:-z-1 before:-mx-2 before:skew-x-8 before:rounded-lg before:bg-gradient-to-br before:from-slate-1

              ${variation === 'default' && 'before:to-slate-4'}
              ${variation === 'primary' && 'before:to-primary-4'}
              ${variation === 'accent' && 'before:to-accent-4'}
              ${variation === 'danger' && 'before:to-danger-4'}
              ${variation === 'secondary' && 'before:to-secondary-4'}
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
  variation,
  title,
  ...rest
}) => {
  return (
    <div className="mb-12 grid place-content-center">
      <h2 className="relative text-5xl font-bold" {...rest}>
        <TitleSkew title={title} variation={variation} />
      </h2>
    </div>
  )
}

export default SectionTitle
