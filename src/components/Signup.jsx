import { useRef } from 'react';
import { Form, Button, Card, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Signup = () => {
	const [emailRef] = useRef();
	const [passwordRef] = useRef();
	const [passwordConfirmRef] = useRef();
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        signup(emailRef.current.value, passwordRef.current.value);
    };

	return (
		<div className="w-100" style={{ maxWidth: '400px' }}>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label> Email</Form.Label>
							<Form.Control
								type="email"
								ref={emailRef}
								required
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label> password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								required
							/>
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								required
							/>
						</Form.Group>
						<Button className="w-100 mt-4" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account?{' '}
				<Nav.Link to="/login" as={NavLink}>
					Sign In
				</Nav.Link>
			</div>
		</div>
	);
};
