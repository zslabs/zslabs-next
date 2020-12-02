import * as React from 'react'
import { createPortal } from 'react-dom'

const ClientOnlyPortal = ({ children }) => {
  const ref = React.useRef()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    ref.current = document.body // eslint-disable-line no-undef

    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal
