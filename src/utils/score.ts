import { saveScoreToLeaderboard } from "./leaderboard";
import { getStorage, saveStorage } from "./storage";

export const getHighScore = () => {
    const highScore = Number(getStorage('highscore'));

    return (isNaN(highScore)) ? 0 : highScore;
};

export const setHighScore = (currentScore: number) => {
    const highScore = getHighScore();

    if (currentScore > Number(highScore)) saveStorage('highscore', currentScore);
}

export const checkLeaderboardScore = (roundScore: number) => {
    const highScore = getHighScore();

    if (roundScore === highScore) saveScoreToLeaderboard(roundScore);
}
