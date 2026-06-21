import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../common/Layout'
import { Icon } from '@iconify/react'

const Register = () => {
  return (
    <Layout>
       <div className='container py-5 mt-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-5'>
                    <form>
                        <div className='card border-0 register-card'>
                            <div className='card-body p-5'>
                                <div className="text-center mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
                                        <Icon icon="ph:user-plus-light" className="fs-1" style={{ color: '#1da599' }} />
                                    </div>
                                    <h3 className='fw-bold text-dark mb-2'>Create an Account</h3>
                                    <p className="text-muted">Join us to start learning today</p>
                                </div>

                                <div className='mb-4'>
                                    <label className='form-label fw-medium text-dark' htmlFor="name">Full Name</label>
                                    <div className="input-group custom-input-group">
                                        <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                            <Icon icon="ph:user" className="fs-5" />
                                        </span>
                                        <input                                     
                                            type="text" 
                                            id="name"
                                            className='form-control border-start-0 ps-0 shadow-none' 
                                            placeholder='John Doe' 
                                        />                               
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label className='form-label fw-medium text-dark' htmlFor="email">Email Address</label>
                                    <div className="input-group custom-input-group">
                                        <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                            <Icon icon="ph:envelope-simple" className="fs-5" />
                                        </span>
                                        <input 
                                            type="email" 
                                            id="email"
                                            className='form-control border-start-0 ps-0 shadow-none' 
                                            placeholder='name@example.com' 
                                        />
                                    </div>
                                </div>

                                <div className='mb-5'>
                                    <label className='form-label fw-medium text-dark' htmlFor="password">Password</label>
                                    <div className="input-group custom-input-group">
                                        <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                            <Icon icon="ph:lock-key" className="fs-5" />
                                        </span>
                                        <input 
                                            type="password" 
                                            id="password"
                                            className='form-control border-start-0 ps-0 shadow-none' 
                                            placeholder='Create a strong password' 
                                        />                                
                                    </div>
                                </div>

                                <button className='btn w-100 py-3 mb-4 text-white fw-bold register-btn' style={{ backgroundColor: '#1da599', borderRadius: '10px', fontSize: '1.1rem' }}>
                                    Sign Up
                                </button>

                                <div className="text-center">
                                    <span className="text-muted">Already have an account? </span>
                                    <Link to={`/account/login`} className='text-decoration-none fw-bold' style={{ color: '#1da599' }}>Sign In Here</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
            .register-card {
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.04);
            }
            .custom-input-group .form-control, .custom-input-group .input-group-text {
                border-color: #e5e7eb;
                padding-top: 0.8rem;
                padding-bottom: 0.8rem;
                transition: all 0.3s ease;
            }
            .custom-input-group:focus-within .form-control, .custom-input-group:focus-within .input-group-text {
                border-color: #1da599;
            }
            .custom-input-group .form-control:focus {
                background-color: transparent;
            }
            .register-btn {
                transition: all 0.3s ease;
            }
            .register-btn:hover {
                background-color: #15857b !important;
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(29, 165, 153, 0.2);
            }
        `}} />
    </Layout>
  )
}

export default Register