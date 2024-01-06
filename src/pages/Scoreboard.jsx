import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const Scoreboard = () => {
    // TODO: convert to typescript
    const [editHoleScoreForGolfer, setEditHoleScoreForGolfer] = useState(null);
    const [saveConfirmation, setSaveConfirmation] = useState(false);
    const localGolfersJSON = localStorage.getItem('golfers');
    const localGolfers = JSON.parse(localGolfersJSON);
    const INPUTSTYLE = {
        width: '64px',
        height: '32px',
    };

    const handleSave = () => {
        localGolfers.some((golfer) => {
            for (const key of Object.keys(golfer.score)) {
                if (!golfer.score[key]) setSaveConfirmation(true);
            }
        });
    };

    useEffect(() => {
        console.log({ saveConfirmation });
    }, [saveConfirmation]);

	return (
		<>
			<h1>Scoreboard</h1>
			{/* <h2>Players:</h2> */}
			{/* TODO: add whose deal it is this turn - or put it on each hole in the table header - or highlight the person whose turn it is to deal */}
			{/* TODO: highlight the current hole */}
			{/* <ul>
				{localGolfers.map((golfer, index) => {
					return (
						<li key={`golfer-name${index + 1}`}>{golfer.name}</li>
					);
				})}
			</ul> */}
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Golfer</th>
						<th>Hole 1</th>
						<th>Hole 2</th>
						<th>Hole 3</th>
						<th>Hole 4</th>
						<th>Hole 5</th>
						<th>Hole 6</th>
						<th>Hole 7</th>
						<th>Hole 8</th>
						<th>Hole 9</th>
						<th>Total Score</th>
					</tr>
				</thead>
				<tbody>
					{localGolfers.map((golfer) => {
						const thisGolfer = localGolfers.find(
							(player) => player.id === golfer.id,
						);
						let totalScore = 0;
						Object.values(golfer.score).forEach((hole) => {
							totalScore += hole;
						});

                        return (
                            <tr key={`scorecard-row-${golfer.name}`}>
                                <td>{golfer.name}</td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 1,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 1 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole1}
                                            onChange={(e) => {
                                                thisGolfer.score.hole1 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole1
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 2,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 2 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole2}
                                            onChange={(e) => {
                                                thisGolfer.score.hole2 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole2
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 3,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 3 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole3}
                                            onChange={(e) => {
                                                thisGolfer.score.hole3 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole3
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 4,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 4 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole4}
                                            onChange={(e) => {
                                                thisGolfer.score.hole4 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole4
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 5,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 5 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole5}
                                            onChange={(e) => {
                                                thisGolfer.score.hole5 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole5
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 6,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 6 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole6}
                                            onChange={(e) => {
                                                thisGolfer.score.hole6 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole6
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 7,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 7 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole7}
                                            onChange={(e) => {
                                                thisGolfer.score.hole7 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole7
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 8,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 8 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole8}
                                            onChange={(e) => {
                                                thisGolfer.score.hole8 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole8
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setEditHoleScoreForGolfer({
                                            golfer: golfer.id,
                                            hole: 9,
                                        });
                                    }}
                                >
                                    {editHoleScoreForGolfer &&
                                    editHoleScoreForGolfer.golfer ===
                                        golfer.id &&
                                    editHoleScoreForGolfer.hole === 9 ? (
                                        <Form.Control
                                            style={INPUTSTYLE}
                                            placeholder={thisGolfer.score.hole9}
                                            onChange={(e) => {
                                                thisGolfer.score.hole9 =
                                                    parseInt(e.target.value);
                                            }}
                                            onBlur={() => {
                                                localStorage.setItem(
                                                    'golfers',
                                                    JSON.stringify(
                                                        localGolfers,
                                                    ),
                                                );
                                                setEditHoleScoreForGolfer(null);
                                            }}
                                        />
                                    ) : (
                                        golfer.score.hole9
                                    )}
                                </td>
                                <td>{totalScore}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Button
                disabled={!localGolfers[0].score.hole1}
                onClick={() => handleSave()}
            >
                Save Game
            </Button>
        </>
    );
};
