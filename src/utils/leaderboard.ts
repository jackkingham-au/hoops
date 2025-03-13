import axios from "axios";
import { getTeamName } from "./team";

const api = axios.create({
    baseURL: import.meta.env.VITE_LEADERBOARD_API_BASE,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

/** Get all leaderboard entries.
 * 
 * [Docs Reference](https://docs.sheetdb.io/sheetdb-api/read)
 */
export const getLeaderboard = () => {
    return api.get('/');
}

/** Create new team entry.
 * 
 * [Docs Reference](https://docs.sheetdb.io/sheetdb-api/create)
 */
export const addTeamToLeaderboard = (team: string) => {
    const id = Date.now();
    const score = 0;

    const data = {
        id,
        team,
        score,
    }

    api.post('/', { data })
}

/** Update existing team entry.
 * 
 * [Docs Reference](https://docs.sheetdb.io/sheetdb-api/update#update-with-single-query)
 */ 
export const saveScoreToLeaderboard = (score: number) => {
    const team = getTeamName();
    const data = {
        team,
        score,
    }

    api.patch(`/team/${team}`, { data })
}

export const filterLeaderboard = (results: { score: number, team: string }[]) => {
    const yourTeam = getTeamName();

    return results
        .filter(({ team }) => team !== yourTeam)
        .filter(({ score }) => score)
        .sort((a, b) => b.score - a.score)
}
