import Cloud from "../models/Cloud";
import Clouds from "../models/Clouds";

const Sky = () => {

    return (
        <>
            <Clouds position={[50, 15, -120]} rotation-y={-Math.PI / 4} scale={30} />
            <Clouds position={[-50, -15, -150]} rotation-y={Math.PI / 4} scale={30} />
            <Clouds position={[-75, 20, -150]} rotation-y={Math.PI / 8} scale={15} />

            <Cloud scale={1} position={[20, 10, 5]} rotation-y={Math.PI / 2} />
            <Cloud scale={1} position={[20, 20, 8]} rotation-y={Math.PI / 2} />
            <Cloud scale={1} position={[20, 18, 5]} rotation-y={Math.PI / 2} />
            <Cloud scale={1.5} position={[-20, 15, 20]} rotation-y={-Math.PI / 2} />
            <Cloud scale={2} position={[-15, 5, 25]} rotation-y={-Math.PI / 4} />
            <Cloud scale={2} position={[10, 8, 25]} rotation-y={-Math.PI / 2} />
            <Cloud scale={4} position={[60, 15, 5]} rotation-y={Math.PI / 6} />
            <Cloud scale={5} position={[-50, 10, -200]} rotation-y={Math.PI / 2} />

        </>
    )
}

export default Sky;