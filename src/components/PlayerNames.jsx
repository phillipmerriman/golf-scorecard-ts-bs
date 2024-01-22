import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import * as playerData from '../data/players.json';
import styles from './globalStyles.module.scss';

// TODO: convert to typescript
// type PlayerNamesProps = {
//   numberOfPlayers: number;
//   setNumberOfPlayers: Function;
//   setPlayerCountChosen: Function;
// };

/*
[
    {
        "name": "name",
        "score": {
            "hole-1": 0,
            "hole-2": 0,
            "hole-3": 0,
            "hole-4": 0,
            "hole-5": 0,
            "hole-6": 0,
            "hole-7": 0,
            "hole-8": 0,
            "hole-9": 0
        }
    }
]

{
    player-1: {
        name: "name",
        score: {
            hole-1: 0,
            hole-2: 0,
            hole-3: 0,
            hole-4: 0,
            hole-5: 0,
            hole-6: 0,
            hole-7: 0,
            hole-8: 0,
            hole-9: 0
        }
    }
}
*/

export const PlayerNames = ({
    numberOfPlayers,
    setNumberOfPlayers,
    setPlayerCountChosen,
    // }: PlayerNamesProps) => {
    //   const players: Array<Object> = [];
    //   const defaultScore: Object = {
    //     hole1: null,
    //     hole2: null,
    //     hole3: null,
    //     hole4: null,
    //     hole5: null,
    //     hole6: null,
    //     hole7: null,
    //     hole8: null,
    //     hole9: null,
    //   };
}) => {
    const players = [];
    const defaultScore = {
        hole1: null,
        hole2: null,
        hole3: null,
        hole4: null,
        hole5: null,
        hole6: null,
        hole7: null,
        hole8: null,
        hole9: null,
    };
    const playerNamesForm = [];
    const navigate = useNavigate();

    for (let i = 0; i < numberOfPlayers; i++) {
        const label = `Player ${i + 1}`;
        const ID = uid(8);
        const newPlayer = { id: ID, name: '', score: defaultScore };
        // const newPlayer: any = { id: ID, name: '', score: defaultScore };
        players.push(newPlayer);
        // might need this later:
        const thisPlayer = players.find((player) => player);

        playerNamesForm.push(
            <InputGroup
                size="sm"
                className="mb-3"
                key={'IG' + i}
                id={`player${i + 1}name`}
            >
                <InputGroup.Text id={i + label}>{label}</InputGroup.Text>
                <Form.Control
                    id={`${label.replace(' ', '').toLowerCase()}Input`}
                    aria-label={label}
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => (newPlayer.name = e.target.value)}
                />
            </InputGroup>,
        );
    }

    const handleGolferNameSubmit = async () => {
        await localStorage.setItem('golfers', JSON.stringify(players));
        navigate('/Scoreboard');
    };

    return (
        <>
            <Form
                className={styles['formStyles']}
                data-testid="name-input-form"
            >
                <Form.Label htmlFor="setPlayerNames">
                    Set Player Names
                </Form.Label>
                {playerNamesForm}
            </Form>
            <Button
                className="mt-3"
                variant="primary"
                onClick={() => {
                    setNumberOfPlayers(0);
                    setPlayerCountChosen(false);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left-square"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                    />
                </svg>{' '}
                Go Back
            </Button>
            <Button
                className="mt-3 ms-3"
                variant="primary"
                onClick={handleGolferNameSubmit}
            >
                Continue
            </Button>
        </>
    );
};

PlayerNames.propTypes = {
    numberOfPlayers: PropTypes.number,
    setNumberOfPlayers: PropTypes.func,
    setPlayerCountChosen: PropTypes.func,
};
