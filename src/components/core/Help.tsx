import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { CircleFill, HandIndexFill, Question, XLg } from "react-bootstrap-icons";
import useSound from "../../hooks/useSound";

const Help = () => {
    const [open, setOpen] = useState(false);

    const { playSound } = useSound('button')

    const animation = useSpring({
        opacity: open ? 1 : 0,
        display: open ? 'flex' : 'none',
    });

    const toggle = () => {
        setOpen(!open);
        playSound();
    }

    return (
        <>
            <button onClick={toggle} className="fixed bottom-4 p-2 rounded-lg right-20 btn z-[60]">
                <Question size={32} className="fill-grey-700 hover:scale-125 block transition" />
            </button>

            <animated.div style={animation} className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 py-8 px-4 md:help-desktop flex-col  bg-black/80 z-50">
                <button className="p-2 absolute top-4 right-4 rounded-full" onClick={() => setOpen(false)}>
                    <XLg size={48} className="hover:scale-125 fill-gray-200" />
                </button>

                <div className="flex my-4 relative right-10 items-center mx-8 justify-center flex-col max-w-[200px]">
                    <CircleFill size={16} className="mr-2 fill-white animate-ping relative top-3 right-3 z-[60]" />
                    <HandIndexFill size={32} className="mb-6 -rotate-45 fill-white" />
                    <p className="text-white text-left">Tap the left side of the screen to bounce the ball <span className="text-orange-200">LEFT</span>.</p>
                </div>

                <div className="flex my-4 items-center justify-center flex-col max-w-[200px] mx-auto">
                    <div className="relative top-3 flex items-center justify-center flex-col mb-8">
                        <CircleFill size={32} className=" fill-red-400 animate-bounce" />
                        <div className="border-b-4 border-white w-10 rounded-full"></div>
                    </div>
                    <p className="text-white">Score as many HOOPS as you can!</p>
                </div>

                <div className="flex my-4 relative left-10 items-center mx-8 justify-center flex-col max-w-[200px] w-full">
                    <CircleFill size={16} className="mr-2 fill-white animate-ping relative top-3 right-3 z-[60]" />
                    <HandIndexFill size={32} className="mb-6 -rotate-45 fill-white" />
                    <p className="text-white text-right">Tap the right side of the screen to bounce the ball <span className="text-orange-200">RIGHT</span>.</p>
                </div>

            </animated.div>
        </>
    )
}

export default Help;