import { create } from 'zustand'
import { getRandomEmoji } from '../utils/emoji';

type EmojiPrompt = {
    show: boolean,
    emoji: string,
    setEmoji: () => void, 
    setShow: (show: boolean) => void,
    reset: () => void,
}

const initialState = {
    show: false,
    emoji: ''
}

const useEmojiPrompt = create<EmojiPrompt>((set) => ({
    ...initialState,
    setShow: (show) => set({ show }),
    setEmoji: () => set({ emoji: getRandomEmoji() }),
    reset: () => set({ ...initialState })
}))

export default useEmojiPrompt;