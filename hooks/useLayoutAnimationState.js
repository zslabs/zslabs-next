import create from 'zustand'

const useLayoutAnimationState = create((set) => ({
  done: false,
  setDone: () => set((state) => ({ done: !state.done })),
}))

export default useLayoutAnimationState
