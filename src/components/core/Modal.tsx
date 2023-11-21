import { animated, useSpring } from "@react-spring/web";
import useModal from "../../hooks/useModal";
import { XLg } from "react-bootstrap-icons";

const Modal = ({ children, onClose, type = 'DEFAULT' }: { type?: string, children: React.ReactNode, onClose?: ([...args]?: any[]) => void }) => {

    const { open, setOpen, type: activeType } = useModal();
    const openThis = open && activeType === type;

    const slideIn = useSpring({
        y: openThis ? 0 : 4000
    })

    const close = () => {
        if (typeof onClose !== 'undefined') onClose(); 

        setOpen(false, type)
    }

    const overlayClose = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).id === 'overlay') close();
    }

    return (
        <animated.div
            style={slideIn}
            className="fixed flex items-center justify-center bg-black/50 top-0 left-0 right-0 bottom-0 z-[100]"
            onClick={e => overlayClose(e)}
            id="overlay"
        >
            <div className="bg-orange-800 border-r-4 border-b-4 border-t-[1px] border-l-[1px] border-black w-[90%] md:w-[50%] max-h-[90vh] overflow-x-hidden overflow-y-auto rounded-lg px-2 py-4 fixed z-[70] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="p-2 ml-auto block rounded-full" onClick={() => close()}>
                    <XLg size={24} className="hover:scale-125 fill-white" />
                </button>

                {children}
            </div>
        </animated.div>
    )
}

export default Modal;