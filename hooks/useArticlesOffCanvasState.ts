import create, { State } from 'zustand'

interface ArticlesOffCanvasState extends State {
  open: boolean
  toggle: () => void
}

const useArticlesOffCanvasState = create<ArticlesOffCanvasState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}))

export default useArticlesOffCanvasState
