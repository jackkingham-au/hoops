import { CylinderCollider, CollisionPayload } from "@react-three/rapier";
import * as THREE from "three";

const GoalSensor = ({ goal }: { goal: () => void }) => {

    const entryVector = new THREE.Vector3();
    const exitVector = new THREE.Vector3();

    const reset = () => {
        entryVector.set(0, 0, 0);
        exitVector.set(0, 0, 0);
    }

    const enter = (e: CollisionPayload) => {
        const ball = e.colliderObject;
        ball?.getWorldPosition(entryVector);
    }

    const exit = (e: CollisionPayload) => {
        const ball = e.colliderObject;
        ball?.getWorldPosition(exitVector);

        if (entryVector.y > exitVector.y) goal();

        reset();
    }

    return (
        <>
            <CylinderCollider
                args={[0.25, 3]}
                onIntersectionEnter={enter}
                onIntersectionExit={exit}
                sensor
            />
        </>
    )
}

export default GoalSensor;