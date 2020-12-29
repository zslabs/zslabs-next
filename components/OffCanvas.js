import * as React from 'react'
import PropTypes from 'prop-types'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import useClickAway from 'react-use/lib/useClickAway'
import { motion, AnimatePresence } from 'framer-motion'

import ClientOnlyPortal from './ClientOnlyPortal'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

const OffCanvas = ({ children, open, setIsOpen, ...rest }) => {
  const offCanvasRef = React.useRef()
  const offCanvasPanelRef = React.useRef()

  const direction = React.useRef('forward')

  const offCanvasVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const offCanvasDialogVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  // On unmount, clear any/all locks on `<body />`
  React.useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  useUpdateEffect(() => {
    if (open) {
      disableBodyScroll(offCanvasPanelRef.current)
      direction.current = 'forward'
    } else {
      enableBodyScroll(offCanvasPanelRef.current)
      direction.current = 'reverse'
    }
  }, [open])

  useClickAway(offCanvasPanelRef, () => setIsOpen(false))

  return (
    <ClientOnlyPortal>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={offCanvasVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={offCanvasRef}
            className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 pr-4 backdrop-blur"
            {...rest}
          >
            <motion.aside
              variants={offCanvasDialogVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              ref={offCanvasPanelRef}
              className="overflow-auto bg-gray-100 dark:bg-gray-800 rounded-tr-2xl shadow-lg z-20 relative top-0 left-0 h-full w-full md:max-w-xs p-8"
              transition={{ x: { stiffness: 1000 } }}
            >
              <button
                type="button"
                className="absolute right-8 top-8 inline-block duration-300 opacity-50 ease-bounce transform hover:scale-105 hover:opacity-100 text-2xl focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <CloseSvg />
              </button>
              {children}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  )
}

OffCanvas.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
}

export default OffCanvas
