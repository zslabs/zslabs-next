import * as React from 'react'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

const ScrollIndicator: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const [isComplete, setIsComplete] = React.useState(false)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  React.useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange])

  return (
    <svg viewBox="0 0 60 60" {...props}>
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="currentColor"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="currentColor"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  )
}

export default ScrollIndicator
