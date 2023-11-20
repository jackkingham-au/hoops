import useEmojiPrompt from "./useEmojiPrompt";
import useGoalTracker from "./useGoalTracker";
import useModal from "./useModal";
import useSpawner from "./useSpawner";

const useResetGame = () => {
    const { reset: goalReset } = useGoalTracker();
    const { reset: spawnerReset } = useSpawner();
    const { reset: modalReset } = useModal();
    const { reset: emojiReset } = useEmojiPrompt()

    const reset = () => {
        goalReset();
        spawnerReset();
        modalReset();
        emojiReset();
    }

    return reset;
}

export default useResetGame;