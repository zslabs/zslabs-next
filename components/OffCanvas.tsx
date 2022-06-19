import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import type { AnimationProps, Transition } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import IconButton from './IconButton'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

interface OffCanvasProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger(
    props?: Dialog.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
  ): React.ReactElement
  title(
    props?: Dialog.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
  ): React.ReactElement
  description?(
    props?: Dialog.DialogDescriptionProps &
      React.RefAttributes<HTMLParagraphElement>
  ): React.ReactElement
}

const offCanvasVariants: AnimationProps['variants'] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const offCanvasDialogVariants: AnimationProps['variants'] = {
  hidden: {
    opacity: 0,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const OffCanvas: React.FC<OffCanvasProps> = ({
  trigger: Trigger,
  title: Title,
  description: Description,
  children,
  open,
  setOpen,
}) => {
  const handleOnCloseAutoFocus = React.useCallback((e: Event) => {
    e.preventDefault()
  }, [])

  const offCanvasTransition: Transition = React.useMemo(
    () => ({
      x: { stiffness: 1000 },
    }),
    []
  )

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
                variants={offCanvasVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 z-50 pr-4 bg-slate-900/75"
              >
                <Dialog.Content
                  onCloseAutoFocus={handleOnCloseAutoFocus}
                  asChild
                  forceMount
                >
                  <motion.div
                    variants={offCanvasDialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-auto relative top-0 left-0 z-20 px-8 pt-16 pb-8 w-full h-full bg-slate-100 dark:bg-slate-800 rounded-tr-2xl shadow-lg md:max-w-xs"
                    transition={offCanvasTransition}
                  >
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

export default OffCanvas
