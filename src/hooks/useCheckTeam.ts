import { useEffect } from "react";
import { saveTeamName } from "../utils/team";

const useCheckTeam = () => {
    useEffect(() => {
        saveTeamName();
    }, [])
}

export default useCheckTeam;