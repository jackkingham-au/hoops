
import BackButton from './components/core/BackButton';
import Help from './components/core/Help';
import Emoji from './components/core/Emoji';
import Options from './components/core/Options';
import RoundOver from './components/core/RoundOver';
import Screens from './components/screens/';
import useNavigator from './hooks/useNavigator';

const App = () => {

    const { screen } = useNavigator();

    if (screen === 'GAME') return (
        <>
            <Options />
            <BackButton />
            <Help />

            <Emoji />
            <RoundOver />

            <Screens.Game />
        </>
    )

    if (screen === 'LEADERBOARD') return <Screens.Leaderboard />

    return <Screens.Home />
}

export default App;