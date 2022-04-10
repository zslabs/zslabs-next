import * as React from 'react'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="px-4 mx-auto max-w-3xl" {...props} />
}

export default Container
