import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { getTeamName } from "./team";

const instance = axios.create({
    baseURL: import.meta.env.VITE_LEADERBOARD_API_BASE,
})

const api = setupCache(instance, {

});

export const getLeaderboard = () => {
    return api.get('', {
        cache: {
            cacheTakeover: false
        }
    });
}

export const addTeamToLeaderboard = (team: string) => {
    const id = Date.now();
    const score = 0;

    api.post('', {
        id,
        team,
        score,
    }, {
        cache: {
            cacheTakeover: false
        }
    })
}

export const saveScoreToLeaderboard = (score: number) => {
    const team = getTeamName();

    api.patch(`/team/*${team}*`, {
        team,
        score,
    }, {
        cache: {
            cacheTakeover: false
        }
    })
}

export const filterLeaderboard = (results: { score: number, team: string }[]) => {
    const yourTeam = getTeamName();

    return results
        .filter(({ team }) => team !== yourTeam)
        .filter(({score}) => score)
        .sort((a, b) => b.score - a.score)
}
