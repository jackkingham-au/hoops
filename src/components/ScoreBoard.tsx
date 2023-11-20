import { Box } from "@react-three/drei";
import useGoalTracker from "../hooks/useGoalTracker";
import Font3D from "./Font3D";

const ScoreBoard = () => {
    const { count } = useGoalTracker();

    return (
        <>
            <Font3D meshProps={{ position: [-4, 1.5, -11] }}>{count}</Font3D>
            <Box position={[0, 0, -10]} args={[18, 3, 2]}>
                <meshToonMaterial color="brown" />
            </Box>
        </>
    )
}

export default ScoreBoard;