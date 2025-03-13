import { RapierRigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import React from "react"
import useSpawner from "./useSpawner";
import { useFrame } from "@react-three/fiber";

const useWorldBoundsCheck = (ballCollider: React.RefObject<RapierRigidBody>) => {
    const { setGameOver } = useSpawner();

    const onWorldExit = () => {
        setGameOver();
    }

    const checkWorldBounds = () => {
        if (ballCollider.current === null) return;

        const position = ballCollider.current.translation();

        const isOutsideXBound = () => position.x < -25 || position.x > 25;
        const isOutsideZBound = () => position.z < -15 || position.z > 15;
        const isOutsideYBound = () => position.y < -15 || position.y > 25;

        if (isOutsideXBound() || isOutsideZBound() || isOutsideYBound()) {
            onWorldExit();
        }
    }

    useFrame(() => checkWorldBounds());
}

export default useWorldBoundsCheck;
