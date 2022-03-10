import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import './DashBoard.css'
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand className='text-light'>This is your <span style={{
                        color: "#fd7e14"
                    }}>Dashborad</span> </Navbar.Brand>
                    <Navbar.Brand className='text-light text-center'><sub>More <span style={{
                        color: "#fd7e14"
                    }}> Options <FontAwesomeIcon icon={faArrowRight} />  </span> </sub> </Navbar.Brand>
                    <Navbar.Toggle className='bg-light' aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Close Here <FontAwesomeIcon icon={faArrowRight} /> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className='cusdasboardlink' as={Link} to="/"> Back to Home</Nav.Link>
                                {
                                    admin ?
                                        <div>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="myorders">My Orders</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="addareview">Add a Review</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="manageorders">Manage all Orders</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="addaproducts">Add Products</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="manageproducts">Manage All Products</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="makeadmin">Make an Admin</Nav.Link>
                                        </div>
                                        :
                                        <div>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="myorders">My Orders</Nav.Link>
                                            <Nav.Link className='cusdasboardlink1' as={Link} to="addareview">Add a Review</Nav.Link>
                                        </div>
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;