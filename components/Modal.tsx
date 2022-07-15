import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import type { AnimationProps } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import Button from './Button'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger(
    props?: Dialog.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
  ): React.ReactElement
  beforeTitle?(
    props?: Dialog.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
  ): React.ReactElement
  title(
    props?: Dialog.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
  ): React.ReactElement
  description?(
    props?: Dialog.DialogDescriptionProps &
      React.RefAttributes<HTMLParagraphElement>
  ): React.ReactElement
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
    y: '2rem',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Modal: React.FC<ModalProps> = ({
  trigger: Trigger,
  beforeTitle: BeforeTitle,
  title: Title,
  description: Description,
  children,
  open,
  setOpen,
}) => {
  const handleOnCloseAutoFocus = React.useCallback((e: Event) => {
    e.preventDefault()
  }, [])

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
                className="fixed inset-0 z-50 overflow-auto bg-blackA-11 px-4"
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
                    className="relative z-20 my-4 mx-auto max-w-xl rounded-xl bg-slate-1 p-8 shadow-lg md:my-8"
                  >
                    {BeforeTitle && <BeforeTitle />}
                    <Dialog.Title asChild>
                      <Title />
                    </Dialog.Title>
                    {Description && (
                      <Dialog.Description asChild>
                        <Description />
                      </Dialog.Description>
                    )}
                    {children}
                    <div className="absolute top-4 right-4">
                      <Dialog.Close asChild>
                        <Button iconOnly variation="default">
                          <CloseSvg />
                        </Button>
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
