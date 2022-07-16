import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import { motion } from 'framer-motion'

interface ProseProps {
  size?: 'base' | 'large'
  children: React.ReactNode
}

const Prose = ({ size = 'base', children, ...rest }: ProseProps, ref) => {
  return (
    <motion.div
      ref={ref}
      {...rest}
      className={ctl(`
        prose

        ${size === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'}
      `)}
    >
      {children}
    </motion.div>
  )
}

export default Prose
