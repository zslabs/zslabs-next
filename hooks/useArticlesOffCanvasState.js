import create from 'zustand'

const useArticlesOffCanvasState = create((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}))

export default useArticlesOffCanvasState
