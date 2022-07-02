import type { MotionProps, Transition, Variants } from 'framer-motion'

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

export const viewportInViewOptions = {
  once: true,
  amount: 0.5,
}

export const fadeInDownInitial: MotionProps['initial'] = {
  opacity: 0,
  y: '-2rem',
}

export const fadeInUpInitial: MotionProps['initial'] = {
  opacity: 0,
  y: '2rem',
}

export const fadeInAnimate: MotionProps['animate'] = { opacity: 1, y: 0 }
