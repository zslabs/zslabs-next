import create from 'zustand'

const useAboutModalState = create((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}))

export default useAboutModalState
