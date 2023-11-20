import { OrbitControls } from "@react-three/drei";
import Basketball from "./Basketball";
import Floor from "./Floor";
import Hoop from "./Hoop";
import ScoreBoard from "./ScoreBoard";
import WorldBoundary from "./WorldBoundary";

const Root = () => {

    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight intensity={5} castShadow position={[-5, 5, 0]} />

            <ScoreBoard />

            <Basketball />
            <Hoop />
            <Floor />
            
            <WorldBoundary />

            <OrbitControls
                makeDefault
                enablePan={false}
                enableZoom={false}
                enableRotate={false}
            />
        </>
    )
}

export default Root;