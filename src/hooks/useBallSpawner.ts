import { useEffect } from 'react';
import * as THREE from "three";
import useSpawner from "./useSpawner";

const useBallSpawner = (mesh: THREE.Mesh<any>, position: number[]) => {
    const { spawn, setSpawn } = useSpawner()
    const respawn = () => {
        const [x, y, z] = position;
        mesh.position.set(x, y, z);

        setSpawn(true);
    }

    useEffect(() => {
        if (!spawn) respawn();
    }, [spawn]);

    return {
        spawn
    }
}

export default useBallSpawner;