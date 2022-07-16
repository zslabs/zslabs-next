import * as React from 'react'

import { motion } from 'framer-motion'

interface ProseProps {
  children: React.ReactNode
}

const Prose = ({ children, ...rest }: ProseProps, ref) => {
  return (
    <motion.div ref={ref} {...rest} className="prose text-base md:text-lg">
      {children}
    </motion.div>
  )
}

export default Prose
