import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SocialButtons from "./SocialButtons"

const navigation = () => {
    const divStyle = {
        
      };
      
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#charity">Charity</Nav.Link>
                    <NavDropdown title="Current Year" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/4.1">Board</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4.2">Teams</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4.3">Applications</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Previous Years" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/5.1">ECS 3.0</NavDropdown.Item>
                        <NavDropdown.Item href="#action/5.2">ECS 2.0</NavDropdown.Item>
                        <NavDropdown.Item href="#action/5.3">ECS 1.0</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#tickets">Ticket Sales</Nav.Link>
                    <Nav.Link style={divStyle}><SocialButtons></SocialButtons>
                    
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  };

export default navigation;