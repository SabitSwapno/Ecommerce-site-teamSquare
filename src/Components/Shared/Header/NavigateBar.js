import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import useAuth from '../../../Hooks/useAuth';
import './NavigateBar.css'

const NavigateBar = () => {
    const { user, logout } = useAuth();
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
                            <Nav.Link as={Link} className='text-light' to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-light' to="/exploreshop">Shop</Nav.Link>
                            <Nav.Link as={Link} className='text-light' to="/aboutus">About Us</Nav.Link>
                            {
                                user?.email ?
                                    <div className='d-flex justify-content-center'>
                                        <Nav.Link as={Link} className='text-light' to="/dashboard">Dashboard</Nav.Link>
                                        <button className='logoutbutton text-light' onClick={logout} title="Log Out"><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                    </div>
                                    :
                                    <Nav.Link as={Link} className='text-light' to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Nav.Link as={Link} title="Your Cart" className='text-light' to="/review">
                            <FontAwesomeIcon style={{
                                fontSize: "20px",
                                color: "#fd7e14"
                            }} icon={faShoppingCart} />
                        </Nav.Link>
                        <Navbar.Text className='text-light'>
                            User is <FontAwesomeIcon icon={faArrowRight} />
                            <a className='text-light' href="#login"> {user?.displayName}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigateBar;