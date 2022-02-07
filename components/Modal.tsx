import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import type { AnimationProps } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import IconButton from './IconButton'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger: React.NamedExoticComponent<object>
  beforeTitle?: React.NamedExoticComponent<object>
  title: React.NamedExoticComponent<object>
  description?: React.NamedExoticComponent<object>
}

const modalVariants: AnimationProps['variants'] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const modalDialogVariants: AnimationProps['variants'] = {
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
  const handleOnCloseAutoFocus = React.useCallback((e: Event) => {
    e.preventDefault()
  }, [])

  const [Trigger, Title] = [trigger, title]

  const BeforeTitle = beforeTitle || React.memo(() => null)
  const Description = description || React.memo(() => null)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Trigger />
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-auto fixed inset-0 bg-slate-900/75 z-50 px-4 backdrop-blur-sm"
              >
                <Dialog.Content
                  onCloseAutoFocus={handleOnCloseAutoFocus}
                  asChild
                  forceMount
                >
                  <motion.div
                    variants={modalDialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="bg-slate-100 dark:bg-slate-800 rounded-xl shadow-lg z-20 my-4 md:my-8 mx-auto max-w-xl relative p-8"
                  >
                    {beforeTitle && <BeforeTitle />}
                    <Dialog.Title asChild>
                      <Title />
                    </Dialog.Title>
                    {description && (
                      <Dialog.Description asChild>
                        <Description />
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
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export default Modal
