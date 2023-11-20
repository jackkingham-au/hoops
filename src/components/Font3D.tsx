import { extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import BungeeFont from "../assets/fonts/Bungee_Regular.json";

extend({ TextGeometry })

const Font3D = ({ children, meshProps }: { children: React.ReactNode, meshProps: any }) => {
    const font = new FontLoader().parse(BungeeFont);

    const options = {
        font: font,
        size: 5,
        height: 1,
        curveSegments: 12,
        bevelSize: 8,
        bevelSegments: 5
    }

    return (
        <mesh receiveShadow castShadow {...meshProps}>
            {/* @ts-ignore */}
            <textGeometry args={[children?.toString(), options]} />
            <meshToonMaterial color="cyan" />
        </mesh>
    )
}

export default Font3D;