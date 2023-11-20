import useGameOptions from "./useGameOptions";

const useVibrate = () => {
    const { vibrate } = useGameOptions();

    const vibrateDevice = () => {
        if (vibrate) navigator.vibrate(200);
    }

    return vibrateDevice;
}

export default useVibrate;