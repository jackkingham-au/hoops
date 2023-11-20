import { useEffect, useState } from "react";
import { ArrowCounterclockwise } from "react-bootstrap-icons";
import useGoalTracker from "../../hooks/useGoalTracker";
import useModal from "../../hooks/useModal";
import useSound from "../../hooks/useSound";
import useSpawner from "../../hooks/useSpawner";
import { checkLeaderboardScore } from "../../utils/score";
import Modal from "./Modal";
import useResetGame from "../../hooks/useResetGame";

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

    useEffect(() => {
        if (gameOver) setRoundOver();
    }, [gameOver])

    const restart = () => {
        reset();
    }

    return (
        <Modal onClose={restart}>
            <h3 className="text-3xl text-center mb-4 text-white text-shadow">You Scored</h3>
            <h1 className="text-8xl text-center mb-4 text-white text-shadow">{roundScore}</h1>
            <button className="btn mx-auto my-4" onClick={() => restart()}>
                <ArrowCounterclockwise size={24} className="mr-2" />
                Retry
            </button>
        </Modal>
    )
}

export default RoundOver;