import * as React from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'
import useClickAway from 'react-use/lib/useClickAway'
import { motion, AnimatePresence } from 'framer-motion'
import Portal from '@reach/portal'

import { ReactComponent as CloseSvg } from '~icons/close.svg'
import { spring } from '~helpers'

interface ModalProps {
  open: boolean
  setIsOpen: (open: boolean) => void
}

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  setIsOpen,
  ...rest
}) => {
  const modalRef = React.useRef()
  const modalDialogRef = React.useRef()

  const direction = React.useRef('forward')

  const modalVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  const modalDialogVariants = {
    hidden: {
      opacity: 0,
      y: '25%',
    },
    visible: {
      opacity: 1,
      y: 0,
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
      disableBodyScroll(modalRef.current)
      direction.current = 'forward'
    } else {
      enableBodyScroll(modalRef.current)
      direction.current = 'reverse'
    }
  }, [open])

  useClickAway(modalDialogRef, () => setIsOpen(false))

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={modalRef}
            className="overflow-auto fixed inset-0 bg-gray-900 bg-opacity-75 z-50 px-4 backdrop-filter backdrop-blur-sm"
            {...rest}
          >
            <motion.div
              variants={modalDialogVariants}
              initial="hidden"
              animate="visible"
              transition={spring}
              exit="hidden"
              ref={modalDialogRef}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg z-20 my-4 md:my-8 mx-auto max-w-xl relative p-8"
            >
              <button
                type="button"
                className="absolute right-8 top-8 inline-block duration-300 opacity-50 ease-bounce transform hover:scale-105 hover:opacity-100 text-2xl focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <CloseSvg />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default Modal
