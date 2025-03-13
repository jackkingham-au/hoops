import { useEffect, useRef } from "react";
import useGameOptions from "./useGameOptions";

const SOUNDS = {
    success: '/sounds/success-sound.mp3',
    tap: '/sounds/ball-tap-sound.mp3',
    button: '/sounds/button-press-sound.mp3',
    over: '/sounds/round-over-sound.mp3',
}

const useSound = (type: keyof typeof SOUNDS) => {
    const url = SOUNDS[type]
    const audio = useRef(new Audio(url));
    const { muted } = useGameOptions();

    useEffect(() => {
        audio.current.muted = muted;
    }, [muted]);

    const playSound = () => {
        if (muted) return; 

        audio.current.play();
    }

    return { playSound }
}

export default useSound;