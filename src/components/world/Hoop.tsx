import { RigidBody, CylinderCollider } from "@react-three/rapier";
import useSpawner from "../../hooks/useSpawner";
import useGoalTracker from "../../hooks/useGoalTracker";
import useSound from "../../hooks/useSound";
import useVibrate from "../../hooks/useVibrate";

const Hoop = () => {
    const { triggerRespawn } = useSpawner();
    const { addGoal } = useGoalTracker();

    const { playSound } = useSound('success');
    const vibrateDevice = useVibrate();

    const goal = () => {
        setTimeout(() => {
            triggerRespawn();
            addGoal();
            playSound();
            vibrateDevice();
        }, 500);
    }

    return (
        <group position={[10, 10, 0]}>
            <RigidBody type="fixed" colliders="trimesh" restitution={1}>
                <mesh rotation-x={Math.PI / 2}>
                    <torusGeometry args={[3, 0.5, 16, 100]} />
                    <meshToonMaterial color="#545454" />
                </mesh>

                <CylinderCollider
                    args={[0.25, 3]}
                    onIntersectionEnter={() => goal()}
                    sensor
                />
            </RigidBody>
            <RigidBody type="fixed" restitution={2}>
                <mesh position={[3, 1, 0]} rotation-y={Math.PI / 2}>
                    <boxGeometry args={[7, 5, 0.5]} />
                    <meshToonMaterial color="orange" />
                </mesh>
            </RigidBody>
            <RigidBody type="fixed" colliders="trimesh">
                <mesh position={[4, -5, 0]} rotation-y={Math.PI / 2}>
                    <cylinderGeometry args={[0.5, 0.5, 12, 32]} />
                    <meshToonMaterial color="gray" />
                </mesh>
            </RigidBody>
        </group>
    );
}

export default Hoop; 