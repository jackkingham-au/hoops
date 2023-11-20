import { addTeamToLeaderboard } from "./leaderboard";
import { getRandomName } from "./name"
import { getStorage, saveStorage } from "./storage"

export const getTeamName = () => {
    return getStorage('team');
}

export const saveTeamName = () => {
    const savedName = getTeamName(); 

    if (!savedName) {
        const team = getRandomName();
        
        saveStorage('team', team);
        addTeamToLeaderboard(team);
    }
}
