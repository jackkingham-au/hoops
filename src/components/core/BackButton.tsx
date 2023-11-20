import { ArrowLeft } from "react-bootstrap-icons";
import useNavigator from '../../hooks/useNavigator'
import useSound from '../../hooks/useSound'

const BackButton = () => {

    const { changeScreen } = useNavigator()
    const { playSound } = useSound('button')

    const goBack = () => {
        playSound();
        changeScreen('HOME')
    }

    return (
        <>
            <button onClick={() => goBack()} className="fixed bottom-8 p-2 rounded-lg left-4 btn z-40">
                <ArrowLeft size={48} className="fill-grey-700 hover:scale-125 block transition" />
            </button>
        </>
    );
}

export default BackButton;