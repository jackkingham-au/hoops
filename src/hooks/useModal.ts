import { create } from 'zustand'

type Modal = {
    open: boolean,
    type: string,
    setOpen: (open: boolean, type?: string) => void
    reset: () => void,
}

const initialState = {
    open: false,
    type: 'DEFAULT',
}

const useModal = create<Modal>((set) => ({
    ...initialState,
    setOpen: (open, type) => set({ open, type: type ?? initialState.type }),
    reset: () => set({ ...initialState })
}))

export default useModal;