import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <header className='py-2' sticky='top'>
            <div className='container-fluid'>
                <Navbar expand="lg" >
                    <Container>
                        <Navbar.Brand as={Link} to={'/'} className='fw-bold fs-3 text-success'>LWR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={CustomLink} to={'/'} className='me-3 fw-bolder'>Home</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/blog'} className='me-3 fw-bolder'>Blogs</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/about'} className='fw-bolder me-3'>About Me</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/checkout'} className='me-3 fw-bolder'>Check Out</Nav.Link>
                                <Nav.Link as={CustomLink} to={'/login'} className=' fw-bolder'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>

    );
};

export default Header;