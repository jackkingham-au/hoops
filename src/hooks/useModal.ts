import { create } from 'zustand'

type Modal = {
    open: boolean,
    setOpen: (open: boolean) => void
    reset: () => void,
}

const initialState = {
    open: false,
}

const useModal = create<Modal>((set) => ({
    ...initialState,
    setOpen: (open) => set({ open }),
    reset: () => set({ ...initialState })
}))

export default useModal;