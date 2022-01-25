import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
            <Nav className="me-auto navbar_wrapper">
                <Link class="nav-link" to="/Login">login</Link>
                <Link class="nav-link" to="/shop">Item Shop</Link>
                <Link class="nav-link" to="/Register">register</Link>
                              
            </Nav>
            </Container>
          </Navbar>
        )
    }
}