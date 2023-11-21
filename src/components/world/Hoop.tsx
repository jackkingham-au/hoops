import { RigidBody } from "@react-three/rapier";
import useGoalTracker from "../../hooks/useGoalTracker";
import useSound from "../../hooks/useSound";
import useSpawner from "../../hooks/useSpawner";
import useVibrate from "../../hooks/useVibrate";
import GoalSensor from "../core/GoalSensor";

const Hoop = () => {
    const { triggerRespawn } = useSpawner();
    const { addGoal } = useGoalTracker();

    const { playSound } = useSound('success');
    const vibrateDevice = useVibrate();

    const goal = () => {
        triggerRespawn();
        addGoal();
        playSound();
        vibrateDevice();
    }

    return (
        <group position={[10, 10, 0]}>
            <RigidBody type="fixed" colliders="trimesh" restitution={1}>
                <mesh rotation-x={Math.PI / 2}>
                    <torusGeometry args={[3, 0.5, 16, 100]} />
                    <meshToonMaterial color="#545454" />
                </mesh>
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

            <GoalSensor goal={goal} />
        </group>
    );
}

export default Hoop; 