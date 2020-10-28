import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand className="center">Healthy Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="left">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Recipes" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#breakfast">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="#lunch">Lunch</NavDropdown.Item>
                        <NavDropdown.Item href="#dinner">Dinner</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default NavigationBar;