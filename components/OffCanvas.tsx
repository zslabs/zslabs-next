import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'

import IconButton from './IconButton'

import { ReactComponent as CloseSvg } from '~icons/close.svg'
import { iosEase } from '~helpers/styles'

interface OffCanvasProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger: React.ReactElement
  title: React.ReactElement
  description?: React.ReactElement
}

const offCanvasVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: iosEase },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: iosEase },
  },
}

const offCanvasDialogVariants = {
  hidden: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 0.3, ease: iosEase },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: iosEase },
  },
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  trigger,
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
                variants={offCanvasVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 bg-slate-900 bg-opacity-75 z-50 pr-4 backdrop-blur-sm"
              >
                <Dialog.Content
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  asChild
                  forceMount
                >
                  <motion.div
                    variants={offCanvasDialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-auto bg-slate-100 dark:bg-slate-800 rounded-tr-2xl shadow-lg z-20 relative top-0 left-0 h-full w-full md:max-w-xs pt-16 pr-8 pb-8 pl-8"
                  >
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

export default OffCanvas
