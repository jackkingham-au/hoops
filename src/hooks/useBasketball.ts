import * as THREE from "three";
import { useMemo } from "react";

const useBasketball = () => {
    return useMemo(() => new THREE.Mesh(
        new THREE.SphereGeometry(2, 16, 32),
        new THREE.MeshToonMaterial({ color: 'red' })
    ), [])
}

export default useBasketball;