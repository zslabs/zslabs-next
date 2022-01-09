import type { Transition, Variants } from 'framer-motion'

export const spring: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}

/* eslint-disable import/prefer-default-export */
export const fadeInUp: Variants = {
  offscreen: {
    opacity: 0,
    y: '1rem',
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
}
