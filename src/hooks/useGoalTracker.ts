import { create } from 'zustand';
import { setHighScore } from '../utils/score';

type GoalTracker = {
    count: number,
    addGoal: () => void,
    reset: () => void
}

const initialState = {
    count: 0,
}

const useGoalTracker = create<GoalTracker>((set) => ({
    ...initialState,
    addGoal: () => set(prev => {
        const count = prev.count + 1;
        setHighScore(count);

        return { count }
    }),
    reset: () => set({ ...initialState })
}))

export default useGoalTracker;