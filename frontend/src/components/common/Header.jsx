import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <>
            <Navbar expand="md" className="bg-white custom-navbar py-3 sticky-top">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center gap-2 brand-logo">
                        <div className="logo-icon-wrapper d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(29, 165, 153, 0.1)', color: '#1da599', borderRadius: '12px', width: '40px', height: '40px' }}>
                            <Icon icon="ph:graduation-cap-fill" style={{ fontSize: '1.5rem' }} />
                        </div>
                        <strong className="text-dark fs-4 fw-bold" style={{ letterSpacing: '-0.5px' }}>Smart Learning</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="border-0 shadow-none" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link href="/" className="nav-item-custom mx-2 fw-medium">Home</Nav.Link>
                            <Nav.Link href="/courses" className="nav-item-custom mx-2 fw-medium">All Courses</Nav.Link>
                            {/* <Form className="d-flex me-3 ms-lg-3 ms-md-3">
                            <div className="custom-search-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10 2a8 8 0 105.29 14.71l5 5a1 1 0 001.42-1.42l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
                                </svg>
                                <input type="text" placeholder="Search course here" />
                            </div>
                        </Form> */}
                        </Nav>
                        <div className="d-flex gap-3 align-items-center mt-3 mt-md-0">
                            {/* <a href='/login' className="nav-link fw-medium login-link text-decoration-none">Sign In</a> */}
                            <a href='/account/my-learning' className="btn custom-btn-primary px-4 py-2 fw-medium">My Account</a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <style dangerouslySetInnerHTML={{__html: `
                .custom-navbar {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
                    transition: all 0.3s ease;
                }
                .nav-item-custom {
                    color: #4b5563 !important;
                    transition: color 0.3s ease;
                }
                .nav-item-custom:hover {
                    color: #1da599 !important;
                }
                .login-link {
                    color: #4b5563;
                    transition: color 0.3s ease;
                }
                .login-link:hover {
                    color: #1da599;
                }
                .custom-btn-primary {
                    background-color: #1da599;
                    border-color: #1da599;
                    color: #fff;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                .custom-btn-primary:hover {
                    background-color: #15857b;
                    border-color: #15857b;
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(29, 165, 153, 0.2);
                }
                .brand-logo:hover .logo-icon-wrapper {
                    background-color: #1da599 !important;
                    color: #fff !important;
                    transition: all 0.3s ease;
                }
                .logo-icon-wrapper {
                    transition: all 0.3s ease;
                }
            `}} />
        </>
    )
}

export default Header