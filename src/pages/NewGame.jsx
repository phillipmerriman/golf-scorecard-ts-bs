import React from 'react';
import { ChooseNumberOfPlayers } from '../components/ChooseNumberOfPlayers';
import { useState } from 'react';
import { PlayerNames } from '../components/PlayerNames';

export const NewGame = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [playerCountChosen, setPlayerCountChosen] = useState(false);

    return (
        <>
            <h1>New Game</h1>
            <hr />
            {!playerCountChosen ? (
                <ChooseNumberOfPlayers
                    setNumberOfPlayers={setNumberOfPlayers}
                    setPlayerCountChosen={setPlayerCountChosen}
                    numberOfPlayers={numberOfPlayers}
                />
            ) : (
                <PlayerNames
                    numberOfPlayers={numberOfPlayers}
                    setNumberOfPlayers={setNumberOfPlayers}
                    setPlayerCountChosen={setPlayerCountChosen}
                />
            )}
        </>
    );
};
