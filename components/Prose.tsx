import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import { motion } from 'framer-motion'

interface ProseProps {
  children: React.ReactNode
  variation?: 'base' | 'large'
}

const Prose = ({ children, variation, ...rest }: ProseProps, ref) => {
  return (
    <motion.div
      ref={ref}
      {...rest}
      className={ctl(
        `prose ${variation === 'base' ? 'text-base md:text-lg' : 'text-lg'}`
      )}
    >
      {children}
    </motion.div>
  )
}

export default Prose
