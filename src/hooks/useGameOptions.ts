import { create } from 'zustand'

type GameOptions = {
    muted: boolean,
    setMuted: () => void,
    vibrate: boolean,
    setVibrate: () => void,
}

const useGameOptions = create<GameOptions>((set) => ({
    muted: false,
    setMuted: () => set(prev => ({ muted: !prev.muted })),
    vibrate: true,
    setVibrate: () => set(prev => ({ vibrate: !prev.vibrate })),
}))

export default useGameOptions;