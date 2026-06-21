import React from 'react';
import Layout from '../common/Layout';
import { Accordion, ListGroup } from "react-bootstrap";
import { Icon } from '@iconify/react';

const Detail = () => {
  return (
     <Layout>
        {/* Banner Section */}
        <div className="bg-light pb-5 pt-4 border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-muted">Home</a></li>
                        <li className="breadcrumb-item"><a href="/courses" className="text-decoration-none text-muted">Courses</a></li>
                        <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#1da599' }}>Web Development Bootcamp 2025</li>
                    </ol>
                </nav>
                <div className='row align-items-center'>
                    <div className='col-lg-8'>
                        <div className="d-flex align-items-center mb-3">
                            <span className="badge rounded-pill text-white px-3 py-2" style={{ backgroundColor: '#1da599', fontWeight: '500' }}>Programming</span>
                        </div>
                        <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem' }}>Web Development Bootcamp 2025</h1>
                        <p className="text-muted fs-5 mb-4">Master web development from scratch to advanced level. Learn HTML, CSS, JavaScript, React, Node.js and build a full-stack application.</p>
                        <div className="d-flex flex-wrap gap-4 meta-info">
                            <div className="d-flex align-items-center">
                                <Icon icon="ph:star-fill" className="fs-4 me-2" style={{ color: '#f1c40f' }} />
                                <span className="fw-bold me-1 text-dark">5.0</span>
                                <span className="text-muted">(2,451 reviews)</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <Icon icon="ph:users-light" className="fs-4 me-2" style={{ color: '#1da599' }} />
                                <span className="fw-medium text-dark">150,668</span> <span className="text-muted ms-1">Students</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <Icon icon="ph:briefcase-light" className="fs-4 me-2" style={{ color: '#1da599' }} />
                                <span className="fw-medium text-dark">Advance</span> <span className="text-muted ms-1">Level</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <Icon icon="ph:globe-light" className="fs-4 me-2" style={{ color: '#1da599' }} />
                                <span className="fw-medium text-dark">English</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-8 pe-lg-5'>
                    {/* Course Image/Video Placeholder */}
                    <div className="detail-card mb-5 overflow-hidden">
                        <img src="https://placehold.co/1200x600?text=Course+Preview" alt="Course Preview" className="img-fluid w-100" style={{ objectFit: 'cover', maxHeight: '400px' }} />
                    </div>

                    <div className='detail-card p-4 p-md-5 mb-4'>
                        <h3 className='h4 fw-bold mb-4 text-dark'>Overview</h3>
                        <div className="text-muted" style={{ lineHeight: '1.8' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Vivamus tincidunt, eros et tincidunt tincidunt, libero turpis posuere urna, ut consectetur justo erat a arcu. Fusce eget risus id mauris tincidunt posuere. Curabitur euismod, magna ut tristique venenatis, erat velit venenatis felis, at varius odio elit nec augue. Sed et sapien vitae justo dapibus dictum. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Vivamus tincidunt, eros et tincidunt tincidunt, libero turpis posuere urna, ut consectetur justo erat a arcu. </p>
                        </div>
                    </div>
                    
                    <div className='detail-card p-4 p-md-5 mb-4'>
                        <h3 className='h4 fw-bold mb-4 text-dark'>What you will learn</h3>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <Icon icon="ph:check-circle-fill" className="fs-4 mt-1 flex-shrink-0" style={{ color: '#1da599' }} />
                                    <span className="ms-3 text-muted">Obtain a strong understanding on the fundamentals of programming</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <Icon icon="ph:check-circle-fill" className="fs-4 mt-1 flex-shrink-0" style={{ color: '#1da599' }} />
                                    <span className="ms-3 text-muted">Write your own independent programs in modern JavaScript</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <Icon icon="ph:check-circle-fill" className="fs-4 mt-1 flex-shrink-0" style={{ color: '#1da599' }} />
                                    <span className="ms-3 text-muted">Build full-stack applications with React and Node.js</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <Icon icon="ph:check-circle-fill" className="fs-4 mt-1 flex-shrink-0" style={{ color: '#1da599' }} />
                                    <span className="ms-3 text-muted">Understand databases, authentication, and deployment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='detail-card p-4 p-md-5 mb-4'>
                        <h3 className='h4 fw-bold mb-4 text-dark'>Requirements</h3>
                        <ul className="list-unstyled mb-0 text-muted">
                            <li className="d-flex align-items-center mb-3">
                                <span className="me-3" style={{ color: '#1da599', width: '6px', height: '6px', backgroundColor: '#1da599', borderRadius: '50%', display: 'inline-block' }}></span>
                                <span>Access to PC running on Windows, Mac, or Linux</span>
                            </li>
                            <li className="d-flex align-items-center mb-0">
                                <span className="me-3" style={{ color: '#1da599', width: '6px', height: '6px', backgroundColor: '#1da599', borderRadius: '50%', display: 'inline-block' }}></span>
                                <span>Internet connection to setup development network.</span>
                            </li>                                    
                        </ul>
                    </div>

                    <div className='detail-card p-4 p-md-5 mb-4'>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="h4 fw-bold text-dark mb-0">Course Structure</h3>
                            <span className="text-muted fw-medium">17 Lectures • 32 Hours</span>
                        </div>
                        <Accordion defaultActiveKey="0" className="custom-accordion">
                            {/* Module 1 */}
                            <Accordion.Item eventKey="0" className="border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                                <Accordion.Header className="bg-white">
                                    <div className="d-flex flex-column">
                                        <span className="fw-semibold text-dark">Module 1: Introduction to Web Development</span>
                                        <span className="text-muted fs-6 mt-1">2 lectures • 3 hours</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-0 border-top">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3 px-4 border-0">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="ph:play-circle-light" className="fs-5 me-3 text-muted" />
                                                <span className="text-dark">What is Web Development?</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="preview-link me-4 text-decoration-none fw-medium" style={{ color: '#1da599', fontSize: '0.9rem' }}>Preview</a>
                                                <span className="text-muted" style={{ fontSize: '0.9rem' }}>1 hour</span>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3 px-4 border-top">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="ph:file-text-light" className="fs-5 me-3 text-muted" />
                                                <span className="text-dark">Tools and Setup for Web Development</span>
                                            </div>
                                            <span className="text-muted" style={{ fontSize: '0.9rem' }}>2 hours</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            {/* Module 2 */}
                            <Accordion.Item eventKey="1" className="border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                                <Accordion.Header>
                                    <div className="d-flex flex-column">
                                        <span className="fw-semibold text-dark">Module 2: HTML & CSS Basics</span>
                                        <span className="text-muted fs-6 mt-1">4 lectures • 6 hours</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-0 border-top">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3 px-4 border-0">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="ph:play-circle-light" className="fs-5 me-3 text-muted" />
                                                <span className="text-dark">Introduction to HTML</span>
                                            </div>
                                            <span className="text-muted" style={{ fontSize: '0.9rem' }}>1.5 hours</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3 px-4 border-top">
                                            <div className="d-flex align-items-center">
                                                <Icon icon="ph:play-circle-light" className="fs-5 me-3 text-muted" />
                                                <span className="text-dark">Building a Basic Webpage</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="preview-link me-4 text-decoration-none fw-medium" style={{ color: '#1da599', fontSize: '0.9rem' }}>Preview</a>
                                                <span className="text-muted" style={{ fontSize: '0.9rem' }}>2 hours</span>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                                
                    </div>

                    <div className='detail-card p-4 p-md-5 mb-4'>
                        <h3 className='h4 fw-bold mb-4 text-dark'>Student Reviews</h3>
                        <div className="d-flex align-items-center mb-5">
                            <h2 className="display-4 fw-bold text-dark mb-0 me-4">5.0</h2>
                            <div>
                                <div className="d-flex mb-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Icon key={star} icon="ph:star-fill" className="fs-4" style={{ color: '#f1c40f' }} />
                                    ))}
                                </div>
                                <span className="text-muted">Based on 2,451 reviews</span>
                            </div>
                        </div>

                        <div className='review-list'>
                            <div className="review-item mb-4 pb-4 border-bottom">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="https://placehold.co/50" alt="Mohit Singh" className="rounded-circle me-3" />
                                        <div>
                                            <h6 className="mb-0 fw-bold text-dark">Mohit Singh</h6>
                                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Icon key={star} icon="ph:star-fill" className="fs-6" style={{ color: '#f1c40f' }} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted mb-0">Quisque et quam lacus amet. Tincidunt auctor phasellus purus faucibus lectus mattis. Highly recommended for beginners who want to build a solid foundation.</p>
                            </div>

                            <div className="review-item">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="https://placehold.co/50" alt="Mark Doe" className="rounded-circle me-3" />
                                        <div>
                                            <h6 className="mb-0 fw-bold text-dark">Mark Doe</h6>
                                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>1 week ago</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Icon key={star} icon="ph:star-fill" className="fs-6" style={{ color: '#f1c40f' }} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted mb-0">The course is structured very well. The instructor goes into detail and explains concepts clearly. Quisque et quam lacus amet. Tincidunt auctor phasellus purus faucibus lectus mattis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Pricing */}
                <div className='col-lg-4 mt-4 mt-lg-0'>
                    <div className='detail-card p-4 sticky-top' style={{ top: '20px', zIndex: 10 }}>
                        <div className="text-center mb-4">
                            <div className="d-flex justify-content-center align-items-end mb-2">
                                <h2 className="fw-bold mb-0 text-dark me-2" style={{ fontSize: '2.5rem' }}>$49.99</h2>
                                <span className="text-muted text-decoration-line-through fs-5 mb-1">$199.99</span>
                            </div>
                            <div className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-medium">
                                <Icon icon="ph:clock" className="me-1 mb-1" /> 75% off for next 2 days
                            </div>
                        </div>
                        
                        <button className="btn w-100 py-3 mb-3 text-white fw-bold d-flex justify-content-center align-items-center detail-btn" style={{ backgroundColor: '#1da599', borderRadius: '10px', fontSize: '1.1rem' }}>
                            <Icon icon="ph:shopping-cart-simple-bold" className="fs-4 me-2" />
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-dark w-100 py-3 mb-4 fw-bold" style={{ borderRadius: '10px' }}>
                            Buy Now
                        </button>

                        <div className="course-includes">
                            <h6 className="fw-bold text-dark mb-4 pb-2 border-bottom">This course includes:</h6>
                            <ul className="list-unstyled text-muted">
                                <li className="d-flex align-items-center mb-3"> 
                                    <Icon icon="ph:video-camera-light" className="fs-5 me-3" style={{ color: '#1da599' }} />
                                    <span>32 hours on-demand video</span>
                                </li>
                                <li className="d-flex align-items-center mb-3"> 
                                    <Icon icon="ph:file-text-light" className="fs-5 me-3" style={{ color: '#1da599' }} />
                                    <span>15 downloadable resources</span>
                                </li>
                                <li className="d-flex align-items-center mb-3"> 
                                    <Icon icon="ph:infinity-light" className="fs-5 me-3" style={{ color: '#1da599' }} />
                                    <span>Full lifetime access</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <Icon icon="ph:device-mobile-camera-light" className="fs-5 me-3" style={{ color: '#1da599' }} />
                                    <span>Access on mobile and TV</span>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <Icon icon="ph:certificate-light" className="fs-5 me-3" style={{ color: '#1da599' }} />
                                    <span>Certificate of completion</span>
                                </li>
                            </ul>
                        </div>
                        
                        <hr className="my-4" style={{ opacity: 0.1 }} />
                        
                        <div className="text-center">
                            <a href="#" className="text-decoration-none fw-medium" style={{ color: '#1da599' }}>Share this course</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
            .detail-card {
                background-color: #fff;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                border: 1px solid rgba(0,0,0,0.03);
            }
            .detail-btn {
                transition: all 0.3s ease;
            }
            .detail-btn:hover {
                background-color: #15857b !important;
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(29, 165, 153, 0.2);
            }
            .custom-accordion .accordion-button:not(.collapsed) {
                background-color: rgba(29, 165, 153, 0.05);
                color: #1da599;
                box-shadow: none;
            }
            .custom-accordion .accordion-button:focus {
                box-shadow: none;
                border-color: rgba(29, 165, 153, 0.2);
            }
            .custom-accordion .accordion-button::after {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%231da599'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
            }
            .preview-link:hover {
                text-decoration: underline !important;
            }
        `}} />
    </Layout>
  )
}

export default Detail