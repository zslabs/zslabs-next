import * as React from 'react'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="mx-auto max-w-3xl px-4" {...props} />
}

export default Container
