import React from 'react';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Row>
                <Navbar.Brand className="title">Healthy Recipes</Navbar.Brand>
                <Col xs={{ span: 3, order: 'first' }}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto nav-font">
                            <Nav.Link><Link to="/healthy-recipes/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/healthy-recipes/about" style={{textDecoration: 'none', color: 'white'}}>About</Link></Nav.Link>
                            <NavDropdown title="Recipes" id="collapsible-nav-dropdown" style={{textDecoration: 'none', color: 'white'}}>
                                <NavDropdown.Item><Link to="/healthy-recipes/breakfast" style={{textDecoration: 'none', color: 'black'}}>Breakfast</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/healthy-recipes/lunch" style={{textDecoration: 'none', color: 'black'}}>Lunch</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/healthy-recipes/dinner" style={{textDecoration: 'none', color: 'black'}}>Dinner</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavigationBar;