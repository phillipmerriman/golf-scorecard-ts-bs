import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import navbarStyles from './navbarStyles.module.scss';

export const Navbar = () => {
    return (
        <NavbarBS
            sticky="top"
            className={`shadow-sm mb-3 ${navbarStyles['navbar-image']}`}
        >
            <Container className={`${navbarStyles['navbar-content']}`}>
                <Nav className="me-auto">
                    <Nav.Link
                        to="/"
                        as={NavLink}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        to="/new-game"
                        as={NavLink}
                    >
                        New Game
                    </Nav.Link>
                    <Nav.Link
                        to="/previous-games"
                        as={NavLink}
                    >
                        Previous Games
                    </Nav.Link>
                </Nav>
                <Nav.Link
                    to="/login"
                    as={NavLink}
                >
                    <Button>Login</Button>
                </Nav.Link>
            </Container>
        </NavbarBS>
    );
};
