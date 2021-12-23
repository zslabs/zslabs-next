import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'

import IconButton from './IconButton'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger: React.ReactElement
  beforeTitle?: React.ReactElement
  title: React.ReactElement
  description?: React.ReactElement
}

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
    y: '8rem',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Modal: React.FC<ModalProps> = ({
  trigger,
  beforeTitle,
  title,
  description,
  children,
  open,
  setOpen,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {open && (
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-auto fixed inset-0 bg-slate-900 bg-opacity-75 z-50 px-4 backdrop-blur-sm"
              >
                <Dialog.Content
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  asChild
                  forceMount
                >
                  <motion.div
                    variants={modalDialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-lg z-20 my-4 md:my-8 mx-auto max-w-xl relative p-8"
                  >
                    {beforeTitle}
                    <Dialog.Title asChild>{title}</Dialog.Title>
                    {description && (
                      <Dialog.Description asChild>
                        {description}
                      </Dialog.Description>
                    )}
                    {children}
                    <div className="absolute right-4 top-4">
                      <Dialog.Close asChild>
                        <IconButton variation="default">
                          <CloseSvg />
                        </IconButton>
                      </Dialog.Close>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </motion.div>
            </Dialog.Overlay>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
