import { Box, StarFill } from "react-bootstrap-icons";
import useModal from "../../hooks/useModal";
import useSound from "../../hooks/useSound";
import attributions from "../../utils/attributions";
import Modal from "../core/Modal";

const Credits = () => {

    const { setOpen } = useModal()
    const { playSound } = useSound('button');
    const MODAL_TYPE = 'CREDITS';

    const openCredits = () => {
        setOpen(true, MODAL_TYPE);
        playSound();
    }

    return (
        <>
            <button className="btn w-full my-4" onClick={() => openCredits()}>
                <StarFill size={24} className="mr-2" />
                Credits
            </button>

            <Modal type={MODAL_TYPE}>
                <h2 className="text-3xl text-center mb-4 text-white text-shadow">Credits</h2>

                <p className="text-lg my-4 text-center text-white text-shadow">This was made by</p>

                <a className="btn w-[80%] mx-auto" target="_blank" rel="noopener noreferrer" href="https://jackkingham.com">
                    <img src="/images/jack-kingham.png" alt="Jack Kingham" className="grayscale mr-4 rounded-full" height={40} width={40} />
                    Jack Kingham
                </a>

                <p className="text-lg mb-1 mt-8 text-center text-white text-shadow">Assets Used From Poly.pizza</p>
                <a target="_blank" style={{ textDecorationThickness: 4, textDecorationColor: 'white' }} rel="noreferrer noopener" href="https://creativecommons.org/licenses/by/3.0/" className="text-md hover:underline mx-auto block mb-4 text-white text-shadow w-fit">(License CC 3.0)</a>

                {
                    attributions.map(({ text, link }, index) => (
                        <a key={index} className="btn w-[80%] mx-auto p-2 my-4" target="_blank" rel="noopener noreferrer" href={link}>
                            <Box size={16} className="mr-4" />
                            {text}
                        </a>
                    ))
                }

                <p className="text-lg mb-1 mt-8 text-center text-white text-shadow">Assets Used From Quaternius</p>
                <a target="_blank" style={{ textDecorationThickness: 4, textDecorationColor: 'white' }} rel="noreferrer noopener" href="https://creativecommons.org/publicdomain/zero/1.0/" className="text-md hover:underline mx-auto block mb-4 text-white text-shadow w-fit">(Deed CC 1.0)</a>

                <a className="btn w-[80%] mx-auto p-2 my-4" target="_blank" rel="noopener noreferrer" href="https://poly.pizza/m/KdFNOVn1Gf">
                    <Box size={16} className="mr-4" />
                    Cloud by Quaternius
                </a>
            </Modal>
        </>
    )
}

export default Credits;