import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NewGame } from './pages/NewGame';
import { PreviousGames } from './pages/PreviousGames';
import { Scoreboard } from './pages/Scoreboard';
import players from './data/players.json';

function App() {
    console.log({ players });

    return (
        <>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/new-game"
                        element={<NewGame />}
                    />
                    <Route
                        path="/scoreboard"
                        element={<Scoreboard />}
                    />
                    <Route
                        path="/previous-games"
                        element={<PreviousGames />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
