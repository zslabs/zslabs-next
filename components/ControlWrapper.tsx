import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

import type { ChildrenOnlyProps } from '~types/custom'

const ControlWrapper: React.FC<ChildrenOnlyProps> = (props) => {
  return (
    <div
      className={ctl(
        `relative rounded-lg border-2 border-slate-7 bg-slate-1 text-slate-12 focus-within:border-primary-7 focus-within:text-primary-11`
      )}
      {...props}
    />
  )
}

export default ControlWrapper
