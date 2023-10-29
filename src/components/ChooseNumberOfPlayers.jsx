import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form } from 'react-bootstrap';

// TODO: convert to typescript
// type ChooseNumberOfPlayersProps = {
//   numberOfPlayers: number;
//   setNumberOfPlayers: Function;
//   setPlayerCountChosen: Function;
// };

export const ChooseNumberOfPlayers = ({
    numberOfPlayers,
    setNumberOfPlayers,
    setPlayerCountChosen,
}) => {
    return (
        <Form>
            <Form.Label htmlFor="chooseNumberOfPlayers">
                How Many Players?
            </Form.Label>
            <Form.Select
                id="chooseNumberOfPlayers"
                onChange={(e) => setNumberOfPlayers(parseInt(e.target.value))}
            >
                <option value="0">Choose number of players</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </Form.Select>
            <Button
                className="mt-3"
                variant="primary"
                onClick={() => setPlayerCountChosen(true)}
                disabled={numberOfPlayers < 2}
            >
                Continue
            </Button>
        </Form>
    );
};

ChooseNumberOfPlayers.propTypes = {
    numberOfPlayers: PropTypes.number,
    setNumberOfPlayers: PropTypes.func,
    setPlayerCountChosen: PropTypes.func,
};
