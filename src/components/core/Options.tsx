import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { GearFill, PhoneVibrateFill, SlashCircle, VolumeMuteFill, VolumeUpFill } from "react-bootstrap-icons";
import useGameOptions from "../../hooks/useGameOptions";
import useSound from "../../hooks/useSound";

const Options = () => {
    const [open, setOpen] = useState(false);

    const { muted, setMuted, vibrate, setVibrate } = useGameOptions()

    const animation = useSpring({
        y: open ? 0 : 300,
    });

    const { playSound } = useSound('button')

    const toggle = (option?: string) => {
        switch(option) {
            case 'vibrate':
                setVibrate();    
            break;
            case 'muted':
                setMuted();
            break;
            default:
                setOpen(!open);
            break;
        }

        playSound();
    }

    return (
        <>
            <button onClick={() => toggle('open')} className="fixed bottom-4 p-2 rounded-lg right-4 btn z-[60]">
                <GearFill size={32} className="fill-grey-700 hover:rotate-45 block transition" />
            </button>
            <animated.div style={animation} className="flex items-center justify-start fixed bottom-0 right-0 left-0 p-4 bg-orange-800 border-t-4 border-black z-50">
                <button onClick={() => toggle('muted')} className="btn p-2 mx-2 rounded-lg flex items-center justify-center flex-col">
                    {
                        (!muted)
                            ? <VolumeUpFill size={24} className="fill-green-700 mb-2" />
                            : <VolumeMuteFill size={24} className="fill-red-700 mb-2" />
                    }
                    Volume
                </button>

                <button onClick={() => toggle('vibrate')} className="btn p-2 mx-2 rounded-lg flex items-center justify-center flex-col">
                    {
                        (!vibrate)
                            ? <PhoneVibrateFill size={24} className="fill-green-700 mb-2" />
                            : <SlashCircle size={24} className="fill-red-700 mb-2" />
                    }
                    Vibrate
                </button>
            </animated.div>
        </>
    )
}

export default Options;