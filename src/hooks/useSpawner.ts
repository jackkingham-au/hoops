import { create } from 'zustand'

type Spawner = {
    spawn: boolean,
    gameOver: boolean,
    setSpawn: (spawn: boolean) => void,
    triggerRespawn: () => void,
    setGameOver: () => void,
    reset: () => void,
}

const initialState = {
    spawn: true,
    gameOver: false,
}

const useSpawner = create<Spawner>((set) => ({
    ...initialState,
    setSpawn: (spawn: boolean) => set({ spawn }),
    triggerRespawn: () => set(prev => {
        if (!prev.spawn) return prev;

        return {
            spawn: false,
        } 
    }),
    setGameOver: () => set({ gameOver: true, spawn: false }),
    reset: () => set({ ...initialState }),
}))

export default useSpawner;