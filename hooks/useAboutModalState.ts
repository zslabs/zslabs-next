import create, { State } from 'zustand'

interface AboutModalState extends State {
  open: boolean
  toggle: () => void
}

const useAboutModalState = create<AboutModalState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}))

export default useAboutModalState
