import Forest from "../models/Forest"
import Island from "../models/Island"

const IslandChain = () => {

    return (
        <>
            <Island position={[3, -10, -75]} rotation-y={Math.PI / 4} scale={10} />

            <group position={[5, 0, -120]}>
                <Forest scale={3.5} rotation-y={Math.PI / 4} position={[0, 11, 0]} />
                <Island rotation-y={Math.PI / 4} scale={15} />
            </group>

            <group position={[25, -15, -80]}>
                <Forest scale={5} position={[0, 16, 0]} />
                <Island scale={20} />
            </group>

            {/* Main Island */}
            <Island position={[0, -30, 0]} rotation-y={-Math.PI / 4} scale={40} />
        </>
    )
}

export default IslandChain