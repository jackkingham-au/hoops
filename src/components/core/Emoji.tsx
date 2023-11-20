import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import useEmojiPrompt from "../../hooks/useEmojiPrompt";
import useGoalTracker from "../../hooks/useGoalTracker";

const Emoji = () => {

    const { count } = useGoalTracker()
    const { show, setShow, emoji, setEmoji } = useEmojiPrompt()
    
    const springs = useSpring({
        scale: show ? 1.5 : 0
    })

    useEffect(() => {
        if (count < 3) return;

        setEmoji();
        setShow(true);

        const timeout = setTimeout(() => {
            setShow(false)
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }
    }, [count])

    return (
        <animated.div style={springs} className="fixed top-8 left-8 z-50 pointer-events-none">
            <h2 className="text-4xl">{emoji}</h2>
        </animated.div>
    )
}

export default Emoji;