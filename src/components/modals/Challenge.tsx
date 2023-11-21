import { Clipboard2CheckFill, Clipboard2Fill, PeopleFill } from "react-bootstrap-icons";
import useModal from "../../hooks/useModal";
import Modal from "../core/Modal";
import useSound from "../../hooks/useSound";
import useCopy from "../../hooks/useCopy";

const Challenge = () => {

    const { setOpen } = useModal()
    const { playSound } = useSound('button');
    const MODAL_TYPE = "CHALLENGE";

    const { copyText, copied } = useCopy();

    const copy = () => {
        copyText('https://hoops.jackkingham.com');
        playSound();    
    } 

    const shareChallenge = () => {
        setOpen(true, MODAL_TYPE);
        playSound();
    }

    return (
        <>
            <button className="btn w-full my-4" onClick={() => shareChallenge()}>
                <PeopleFill size={24} className="mr-2" />
                Challenge a Friend
            </button>

            <Modal type={MODAL_TYPE}>
                <h2 className="text-3xl text-center mb-4 text-white text-shadow">Challenge a Friend</h2>
                <p className="text-lg my-8 text-center text-white text-shadow">Click the link below to copy it, and send it to your friends!</p>

                <div className="flex items-center justify-center mx-auto w-[80%] cursor-pointer" onClick={copy}>
                    <p
                        children={'hoops.jackkingham.com'}
                        className="break-words bg-orange-200 block px-2 py-4 rounded-md box-shadow text-orange-700 w-full cursor-pointer"
                        onClick={copy}
                    />
                    <button className="btn relative top-[2px] ml-2">
                        {
                            (copied)
                            ? <Clipboard2CheckFill size={24} className="fill-green-700" />
                            : <Clipboard2Fill size={24} className="fill-orange-700" />
                        }
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default Challenge;