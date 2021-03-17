import React, { Fragment } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './Header.css'

function Header() {
    return (
        <Fragment>
            <Navbar bg="dark" expand="md" sticky="top">
                <Navbar.Brand href="#home">Bright</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#link">Shop</Nav.Link>
                        <Nav.Link href="#link">À propos</Nav.Link>
                    </Nav>
                    <div className="icons">
                        <i className='fas fa-user-circle fa-2x' />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header
