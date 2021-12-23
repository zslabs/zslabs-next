import { Variants } from 'framer-motion'

export const iosEase = [0.36, 0.66, 0.04, 1]

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
