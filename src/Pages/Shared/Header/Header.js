import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';
import logo from '../../../images/logo/logo1.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img height='50px' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home">Dental Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to="/doctor">Doctor</Nav.Link>
                            <NavDropdown  title="Contact" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={CustomLink} to="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item as={CustomLink} to="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;