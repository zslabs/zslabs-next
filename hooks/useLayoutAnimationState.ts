import type { State } from 'zustand'
import create from 'zustand'

interface LayoutAnimationState extends State {
  done: boolean
  setDone: () => void
}

const useLayoutAnimationState = create<LayoutAnimationState>((set) => ({
  done: false,
  setDone: () => set((state) => ({ done: !state.done })),
}))

export default useLayoutAnimationState
