import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from 'three';
import useBallSpawner from "../hooks/useBallSpawner";
import useBasketball from "../hooks/useBasketball";
import useControls from "../hooks/useControls";

const Basketball = () => {
    const ballCollider = useRef<RapierRigidBody>(null);
    const ball = useRef<THREE.Mesh<any>>(null);

    const BALL_SPAWN_POSITION = [0, 3, 0];

    const mesh = useBasketball();
    const { spawn } = useBallSpawner(mesh, BALL_SPAWN_POSITION);

    useControls(ballCollider);

    return (
        <>
            {
                spawn && <RigidBody
                    name="BASKETBALL"
                    type="dynamic"
                    colliders="ball"
                    position={BALL_SPAWN_POSITION as unknown as any}
                    ref={ballCollider}
                    gravityScale={2}
                    mass={2}
                >
                    <mesh
                        ref={ball}
                        geometry={mesh.geometry}
                        material={mesh.material}
                    />
                </RigidBody>
            }
        </>

    )
}

export default Basketball;