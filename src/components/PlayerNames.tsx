import { Button, Form, InputGroup } from 'react-bootstrap';

type PlayerNamesProps = {
	numberOfPlayers: number;
	setNumberOfPlayers: Function;
	setPlayerCountChosen: Function;
};

export const PlayerNames = ({
	numberOfPlayers,
	setNumberOfPlayers,
	setPlayerCountChosen,
}: PlayerNamesProps) => {
	const playerNamesForm = [];
	for (let i = 0; i < numberOfPlayers; i++) {
        const label = `Player ${i + 1}`;
		playerNamesForm.push(
			<InputGroup size="sm" className="mb-3" key={'IG' + i}>
				<InputGroup.Text id={i + label}>
					{label}
				</InputGroup.Text>
				<Form.Control
					aria-label={label}
					aria-describedby="inputGroup-sizing-sm"
				/>
			</InputGroup>
		);
	};

	return (
		<>
			<Form>
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
			<Button className="mt-3 ms-3" variant="primary">
				Continue
			</Button>
		</>
	);
};
