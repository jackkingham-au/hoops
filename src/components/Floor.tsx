import { RigidBody } from "@react-three/rapier";

const Floor = () => {

    return (
        <>
            <RigidBody type="fixed" restitution={2}>
                <mesh rotation-x={Math.PI / 2}>
                    <boxGeometry args={[18, 18, 1]} />
                    <meshStandardMaterial color="springgreen" />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" restitution={4}>
                <mesh position={[-11, 8.5, 0]} rotation-y={Math.PI / 2}>
                    <boxGeometry args={[10, 10, 1]} />
                    <meshStandardMaterial color="springgreen" transparent opacity={0.5} />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" position={[0, 20, 0]} restitution={0}>
                <mesh rotation-x={Math.PI / 2}>
                    <boxGeometry args={[18, 18, 1]} />
                    <meshStandardMaterial color="springgreen" />
                </mesh>
            </RigidBody>
        </>
    );
}

export default Floor;