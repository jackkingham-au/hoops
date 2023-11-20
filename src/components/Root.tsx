import { OrbitControls } from "@react-three/drei";
import Basketball from "./Basketball";
import Floor from "./world/Floor";
import Hoop from "./world/Hoop";
import ScoreBoard from "./ScoreBoard";
import WorldBoundary from "./world/WorldBoundary";
import IslandChain from "./world/IslandChain";

const Root = () => {

    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight intensity={5} castShadow position={[-5, 5, 0]} />
            <color attach="background" args={['#a2d2ff']} />

            <ScoreBoard />

            <Basketball />
            <Hoop />
            <Floor />

            <IslandChain />
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