import * as React from 'react'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="max-w-3xl mx-auto px-4" {...props} />
}

export default Container
