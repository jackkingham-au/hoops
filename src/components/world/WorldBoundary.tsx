import { CuboidCollider, RigidBody } from "@react-three/rapier";
import useSpawner from "../../hooks/useSpawner";

const WorldBoundary = () => {

    const { setGameOver } = useSpawner();

    return (
        <RigidBody position={[0, 10, 0]} type="fixed">
            <CuboidCollider
                sensor
                onIntersectionExit={() => setGameOver()}
                args={[20, 20, 15]}
            />
        </RigidBody>
    );
}

export default WorldBoundary;