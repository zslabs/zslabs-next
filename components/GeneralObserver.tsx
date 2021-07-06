/**
 * @SOURCE https://github.com/PaulieScanlon/mdx-embed/blob/main/packages/mdx-embed/src/components/general-observer/general-observer.tsx
 * MIT License
 * Copyright (c) 2020 Paul Scanlon
 */
import React from 'react'
import { noop } from 'lodash'

interface IGeneralObserverProps {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void
  /** The height of the placeholder div before the component renders in */
  height?: number
}

const GeneralObserver: React.FC<IGeneralObserverProps> = ({
  children,
  onEnter = noop,
  height = 0,
}) => {
  const ref = React.useRef<HTMLElement>(null)
  const [isChildVisible, setIsChildVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true)

          onEnter()
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0,
      }
    )

    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [ref, onEnter])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-testid="general-observer"
      className="my-8"
    >
      {isChildVisible ? children : <div style={{ height, width: '100%' }} />}
    </div>
  )
}

export default GeneralObserver
