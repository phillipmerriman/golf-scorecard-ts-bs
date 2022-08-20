import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Login = () => {
	return (
		<div className='text-center'>
			<h1 className="text-center mb-4">Login</h1>
			<Nav.Link to="/sign-up" as={NavLink}>
					Create An Account
			</Nav.Link>
		</div>
	);
};
