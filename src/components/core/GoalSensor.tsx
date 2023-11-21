import { CylinderCollider } from "@react-three/rapier";

const GoalSensor = ({ goal }: { goal: () => void }) => {

    return (
        <>
            <CylinderCollider
                args={[0.25, 3]}
                onIntersectionEnter={() => goal()}
                sensor
            />
        </>
    )
}

export default GoalSensor;