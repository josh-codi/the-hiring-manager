import React from 'react';
import { Row, Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { Instagram, Twitter, Linkedin, Phone, Envelope } from 'react-bootstrap-icons';


const Header = () => {
    return (

        <div id="header" className="header">
            <Row className="">
                <Navbar bg="light" expand="lg" className="header">
                    <Navbar.Brand href="#home">Hiring Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Link">Our Links</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Create new account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Hiring Manager</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success"><b>Search</b></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </div>

    )
}
export default Header;