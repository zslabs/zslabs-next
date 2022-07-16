import * as React from 'react'

const InlineIconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-block [vertical-align:-0.125em]">{children}</span>
  )
}

export default InlineIconWrapper
