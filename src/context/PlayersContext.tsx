import React, { ReactNode, useContext } from 'react';
import players from '../data/players.json';

type playersProviderProps = {
    children: ReactNode;
};

type player = {
    id: number;
    name: string;
};

type playersContext = {
    players: player[];
};

const PLAYERS = React.createContext({} as playersContext);

export function usePlayers() {
    return useContext(PLAYERS);
}

export function PlayersProvider({ children }: playersProviderProps) {
    return (
        <PLAYERS.Provider value={{ players: players }}>
            {children}
        </PLAYERS.Provider>
    );
}
