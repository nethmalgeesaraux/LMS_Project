import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="custom-footer pt-5 pb-3">
            <div className='container mt-4'>
                <div className='row gy-5 justify-content-between border-bottom pb-5 border-secondary border-opacity-25'>
                    <div className='col-lg-4 col-md-12'>
                        <div className='pe-lg-5'>
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <div className="logo-icon-wrapper d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(29, 165, 153, 0.1)', color: '#1da599', borderRadius: '12px', width: '40px', height: '40px' }}>
                                    <Icon icon="ph:graduation-cap-fill" style={{ fontSize: '1.5rem' }} />
                                </div>
                                <strong className="fs-4 fw-bold text-white" style={{ letterSpacing: '-0.5px' }}>Smart Learning</strong>
                            </div>
                            <p className="text-secondary" style={{ lineHeight: '1.8' }}>Join our Learning Management System and explore a wide range of courses to enhance your skills and achieve your goals. Learn from industry experts.</p>
                            <div className="d-flex gap-3 mt-4">
                                <a href="#" className="social-icon-link">
                                    <Icon icon="ph:facebook-logo-fill" className="fs-4" />
                                </a>
                                <a href="#" className="social-icon-link">
                                    <Icon icon="ph:twitter-logo-fill" className="fs-4" />
                                </a>
                                <a href="#" className="social-icon-link">
                                    <Icon icon="ph:instagram-logo-fill" className="fs-4" />
                                </a>
                                <a href="#" className="social-icon-link">
                                    <Icon icon="ph:linkedin-logo-fill" className="fs-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 col-6'>
                        <h3 className="h6 fw-bold mb-4 text-white text-uppercase" style={{ letterSpacing: '1px' }}>Popular Categories</h3>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3"><a href="#">Digital Marketing</a></li>
                            <li className="mb-3"><a href="#">Web Development</a></li>
                            <li className="mb-3"><a href="#">Machine Learning</a></li>
                            <li className="mb-3"><a href="#">Web Design</a></li>
                            <li className="mb-3"><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-6 col-6'>
                        <h3 className="h6 fw-bold mb-4 text-white text-uppercase" style={{ letterSpacing: '1px' }}>Quick Links</h3>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3"><a href="#">Login</a></li>
                            <li className="mb-3"><a href="#">Register</a></li>
                            <li className="mb-3"><a href="#">My Account</a></li>
                            <li className="mb-3"><a href="/courses">All Courses</a></li>
                            <li className="mb-3"><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div className='col-lg-3 col-md-12'>
                        <h3 className="h6 fw-bold mb-4 text-white text-uppercase" style={{ letterSpacing: '1px' }}>Subscribe Newsletter</h3>
                        <p className="text-secondary mb-4">Stay updated with our latest courses and offers.</p>
                        <div className="newsletter-form position-relative">
                            <input type="email" className="form-control custom-newsletter-input" placeholder="Enter your email address" />
                            <button className="btn custom-newsletter-btn position-absolute top-0 end-0 h-100 px-3">
                                <Icon icon="ph:paper-plane-right-fill" className="fs-5" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className='row copyright mt-4'>
                    <div className='col-md-12 text-center text-secondary' style={{ fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Smart Learning. All Rights Reserved.
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .custom-footer {
                    background-color: #111827; /* Dark grayish-blue */
                    color: #9ca3af;
                }
                .footer-links a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .footer-links a:hover {
                    color: #1da599;
                    transform: translateX(5px);
                }
                .social-icon-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.05);
                    color: #9ca3af;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .social-icon-link:hover {
                    background-color: #1da599;
                    color: #fff;
                    transform: translateY(-3px);
                }
                .custom-newsletter-input {
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    border-radius: 8px;
                    padding: 12px 15px;
                    padding-right: 50px;
                }
                .custom-newsletter-input:focus {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-color: #1da599;
                    box-shadow: none;
                    color: #fff;
                }
                .custom-newsletter-input::placeholder {
                    color: #6b7280;
                }
                .custom-newsletter-btn {
                    background-color: #1da599;
                    color: #fff;
                    border: none;
                    border-radius: 0 8px 8px 0;
                    transition: background-color 0.3s ease;
                }
                .custom-newsletter-btn:hover {
                    background-color: #15857b;
                    color: #fff;
                }
            `}} />
        </footer>
    )
}

export default Footer