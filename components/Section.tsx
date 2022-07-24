import * as React from 'react'

import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

interface SectionProps<T extends HTMLMotionProps<'section'>> {
  as?: T
  children?: React.ReactNode
}

function Section<T extends React.ElementType = typeof motion.section>({
  as,
  ...props
}: SectionProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || motion.section

  return <Component {...props} className="relative py-8 md:py-12" />
}

export default Section
