import Island from "../models/Island"

const IslandChain = () => {

    return (
        <>
            <Island position={[50, -10, -160]} rotation-y={Math.PI / 4} scale={15} />
            <Island position={[5, 0, -120]} rotation-y={Math.PI / 4} scale={15} />
            <Island position={[25, -15, -80]} scale={20} />
            <Island position={[0, -30, 0]} rotation-y={-Math.PI / 4} scale={40} />
        </>
    )
}

export default IslandChain