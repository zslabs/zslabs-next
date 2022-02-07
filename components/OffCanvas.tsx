import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import type { AnimationProps, Transition } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import IconButton from './IconButton'

import { ReactComponent as CloseSvg } from '~icons/close.svg'

interface OffCanvasProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger: React.NamedExoticComponent<object>
  title: React.NamedExoticComponent<object>
  description?: React.NamedExoticComponent<object>
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
  trigger,
  title,
  description,
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

  const [Trigger, Title] = [trigger, title]

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
                variants={offCanvasVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 bg-slate-900/75 z-50 pr-4 backdrop-blur-sm"
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
                    className="overflow-auto bg-slate-100 dark:bg-slate-800 rounded-tr-2xl shadow-lg z-20 relative top-0 left-0 h-full w-full md:max-w-xs pt-16 px-8 pb-8"
                    transition={offCanvasTransition}
                  >
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

export default OffCanvas
