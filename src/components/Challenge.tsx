import { Clipboard2CheckFill, Clipboard2Fill, PeopleFill } from "react-bootstrap-icons";
import useModal from "../hooks/useModal";
import Modal from "./core/Modal";
import useSound from "../hooks/useSound";
import useCopy from "../hooks/useCopy";

const Challenge = () => {

    const { setOpen } = useModal()
    const { playSound } = useSound('button');
    
    const { copyText, copied } = useCopy();

    const copy = () => {
        copyText(window.location.href);
        playSound();    
    } 

    const shareChallenge = () => {
        setOpen(true);
        playSound();
    }

    return (
        <>
            <button className="btn w-full my-4" onClick={() => shareChallenge()}>
                <PeopleFill size={24} className="mr-2" />
                Challenge a Friend
            </button>

            <Modal>
                <h2 className="text-3xl text-center mb-4 text-white text-shadow">Challenge a Friend</h2>
                <p className="text-lg my-8 text-center text-white text-shadow">Click the link below to copy it, and send it to your friends!</p>

                <div className="relative mx-auto w-[80%] cursor-pointer" onClick={copy}>
                    <span
                        children={window.location.href}
                        className="bg-orange-200 block px-2 py-4 rounded-md box-shadow text-orange-700 w-full cursor-pointer"
                        onClick={copy}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-6 z-50">
                        {
                            (copied)
                            ? <Clipboard2CheckFill size={24} className="fill-green-700" />
                            : <Clipboard2Fill size={24} className="fill-orange-700" />
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Challenge;