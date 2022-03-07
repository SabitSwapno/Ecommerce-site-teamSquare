import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigateBar.css'

const NavigateBar = () => {
    return (
        <div>
            <Navbar expand="lg" className='navigations'>
                <Container>
                    <Navbar.Brand style={{
                        color: "#fff"
                    }} href="/">Intense<span style={{
                        color: "#fd7e14"
                    }} >Mart</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' href="/home">Home</Nav.Link>
                            <Nav.Link className='text-light' href="/exploreshop">Shop</Nav.Link>
                            <Nav.Link className='text-light' href="/aboutus">About Us</Nav.Link>
                            <Nav.Link className='text-light' href="/login">Login</Nav.Link>
                        </Nav>
                        <Navbar.Text className='text-light'>
                            Signed in as: <a className='text-light' href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigateBar;