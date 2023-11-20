import { create } from 'zustand'

type Screen = "HOME" | "GAME" | "LEADERBOARD";

type Navigator = {
    screen: Screen,
    changeScreen: (screen: Screen) => void,
}

const useNavigator = create<Navigator>((set) => ({
    screen: 'HOME',
    changeScreen: (screen: Screen) => set({ screen })
}))

export default useNavigator;