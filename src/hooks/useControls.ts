import { useEffect } from "react";
import { RapierRigidBody } from "@react-three/rapier";
import useSound from "./useSound";

const useControls = (ballCollider: React.RefObject<RapierRigidBody>) => {
    const { playSound } = useSound('tap');

    const jump = (e: MouseEvent) => {
        if (ballCollider.current === null) return;

        if ((e.target as HTMLElement)?.tagName !== 'CANVAS') return;

        playSound();

        const screenDivider = window.innerWidth / 2;
        const direction = (e.clientX <= screenDivider) ? 'LEFT' : 'RIGHT';

        ballCollider.current.applyImpulse({ x: (direction === 'LEFT') ? -100 : 100, y: 500, z: 0 }, true)
    }

    useEffect(() => {
        document.addEventListener('click', jump)

        return () => {
            document.removeEventListener('click', jump)
        }
    }, [])
}

export default useControls;