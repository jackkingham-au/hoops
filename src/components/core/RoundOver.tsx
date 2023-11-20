import { useEffect, useState } from "react";
import { ArrowCounterclockwise, ListStars } from "react-bootstrap-icons";
import useGoalTracker from "../../hooks/useGoalTracker";
import useModal from "../../hooks/useModal";
import useSound from "../../hooks/useSound";
import useSpawner from "../../hooks/useSpawner";
import { checkLeaderboardScore } from "../../utils/score";
import Modal from "./Modal";
import useResetGame from "../../hooks/useResetGame";
import useNavigator from "../../hooks/useNavigator";

const RoundOver = () => {
    const { gameOver } = useSpawner();
    const { setOpen } = useModal();
    const { count } = useGoalTracker();
    const { playSound } = useSound('over');
    const reset = useResetGame();

    const [roundScore, setRoundScore] = useState(0);

    const setRoundOver = () => {
        setRoundScore(count);
        checkLeaderboardScore(count);
        setOpen(true);
        playSound();
    }

    const { changeScreen } = useNavigator()

    useEffect(() => {
        if (gameOver) setRoundOver();
    }, [gameOver])

    const restart = () => {
        reset();
    }

    const viewLeaderboard = () => {
        changeScreen('LEADERBOARD')
        reset();
    }

    return (
        <Modal onClose={restart}>
            <h3 className="text-3xl text-center mb-4 text-white text-shadow">You Scored</h3>
            <h1 className="text-8xl text-center mb-4 text-white text-shadow">{roundScore}</h1>
 
            <button className="btn mx-auto my-4 w-full max-w-[250px]" onClick={() => restart()}>
                <ArrowCounterclockwise size={24} className="mr-2" />
                Retry
            </button>
            <button className="btn mx-auto my-4 w-full max-w-[250px]" onClick={() => viewLeaderboard()}>
                <ListStars size={24} className="mr-2" />
                Leaderboard
            </button>
        </Modal>
    )
}

export default RoundOver;