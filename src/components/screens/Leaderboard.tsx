import { useEffect, useState } from "react";
import { filterLeaderboard, getLeaderboard } from "../../utils/leaderboard";
import { getHighScore } from "../../utils/score";
import BackButton from "../core/BackButton";
import Options from "../core/Options";

const Leaderboard = () => {

    const [results, setResults] = useState<any[] | null>(null);

    useEffect(() => {
        getLeaderboard()
            .then((res) => {
                const { data } = res;

                setResults(filterLeaderboard(data));
            })
            .catch((error) => {
                console.error(error);
                setResults([]);
            })
    }, [])

    return (
        <>
            <div id="menu" className="min-h-screen w-screen bg-orange-700 flex items-center justify-center flex-col">
                <div className="rounded-xl bg-black/50 p-4 flex items-center justify-center flex-col">
                    <img src="/icons/basketball.svg" className="scale-[2.7] -mb-8 relative right-2" height={80} width={80} />

                    <h1 id="title" className="uppercase text-white text-6xl font-black">HOOPS</h1>
                    <h3 className="text-shadow text-3xl text-white mb-12 mt-2">Leaderboard</h3>

                    <div className="w-full mb-4 flex justify-between items-center">
                        <p className="text-md text-white text-shadow">TEAM</p>
                        <p className="text-md text-white text-shadow">SCORE</p>
                    </div>

                    <div className="box-shadow mb-4 scale-125 p-4 bg-orange-200 rounded-md w-full flex justify-between items-center">
                        <p className="text-lg text-orange-700">YOU</p>
                        <p className="text-xl text-orange-700">{getHighScore()}</p>
                    </div>

                    {
                        (!results)
                            ? <p className="text-lg text-center text-white text-shadow animate-pulse my-6">⏳ Getting scores...</p>
                            : (results.length === 0)
                                ? <p className="text-lg text-center text-white text-shadow my-6">😕 There's no one else here yet...</p>
                                : results.map(({ team, score }, index) => (
                                    <div key={index} className="box-shadow my-2 p-4 bg-orange-200 rounded-md w-full flex justify-between items-center">
                                        <p className="text-lg text-orange-700">{team}</p>
                                        <p className="text-xl text-orange-700">{score ?? 0}</p>
                                    </div>
                                ))
                    }

                </div>
            </div>

            <Options />
            <BackButton />
        </>
    );
}

export default Leaderboard;