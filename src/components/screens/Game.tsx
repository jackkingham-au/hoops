import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Suspense } from 'react';
import Root from '../Root';
import PageTransition from './PageTransition';
import useResetGame from '../../hooks/useResetGame';
import { useEffect } from "react";

const Game = () => {

    const reset = useResetGame();

    useEffect(() => {
        reset();
    }, [])

    return (
        <PageTransition>
            <Canvas
                id='gameRoot'
                camera={{
                    position: [
                        -10, 20, 35
                    ]
                }}
            >
                <Suspense fallback={null}>
                    <Physics>
                        <Root />
                    </Physics>
                </Suspense>
            </Canvas>
        </PageTransition>
    );
}

export default Game;