import { Controller, ListStars } from "react-bootstrap-icons";
import useNavigator from "../../hooks/useNavigator";
import useSound from "../../hooks/useSound";
import Challenge from "../modals/Challenge";
import Options from "../core/Options";
import useCheckTeam from "../../hooks/useCheckTeam";
import Credits from "../modals/Credits";

const Home = () => {
    const { changeScreen } = useNavigator();
    const { playSound } = useSound('button');
    useCheckTeam();

    const start = () => {
        changeScreen('GAME');
        playSound();
    }

    const leadboard = () => {
        changeScreen('LEADERBOARD');
        playSound();
    }

    return (
        <>
            <div id="menu" className="min-h-screen py-12 w-screen bg-orange-700 flex items-center justify-center flex-col">
                <div className="rounded-xl bg-black/50 p-4 flex items-center justify-center flex-col">
                    <img src="/icons/basketball.svg" className="scale-[2.7] -mb-8 relative right-2" height={80} width={80} />

                    <h1 id="title" className="uppercase text-white text-6xl font-black">HOOPS</h1>
                    <h3 className="text-shadow text-3xl text-white mb-12 mt-2">A 3D Experience</h3>

                    <button className="btn w-[100%] my-4" onClick={() => start()}>
                        <Controller size={24} className="mr-2" />
                        New Game
                    </button>

                    <button className="btn w-[100%] my-4" onClick={() => leadboard()}>
                        <ListStars size={24} className="mr-2" />
                        Leaderboard
                    </button>

                    <Challenge />
                    <Credits />
                </div>
            </div>

            <Options />
        </>
    );
}

export default Home;