import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NewGame } from './pages/NewGame';
import { PlayerNames } from './pages/PlayerNames';
import { PreviousGames } from './pages/PreviousGames';
import { Scoreboard } from './pages/Scoreboard';

function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Container
				className="d-flex justify-content-center mb-4"
				style={{ minHeight: '100vh' }}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-game" element={<NewGame />} />
					<Route path="/player-names" element={<PlayerNames />} />
					<Route path="/scoreboard" element={<Scoreboard />} />
					<Route path="/previous-games" element={<PreviousGames />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<Signup />} />
				</Routes>
			</Container>
		</AuthProvider>
	);
}

export default App;
