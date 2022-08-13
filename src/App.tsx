import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewGame } from './pages/NewGame';
import { PlayerNames } from './pages/PlayerNames';
import { PreviousGames } from './pages/PreviousGames';
import { Scoreboard } from './pages/Scoreboard';

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new-game" element={<NewGame />} />
				<Route path="/player-names" element={<PlayerNames />} />
				<Route path="/scoreboard" element={<Scoreboard />} />
				<Route path="/previous-games" element={<PreviousGames />} />
			</Routes>
		</Container>
	);
}

export default App;
