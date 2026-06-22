import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../common/Layout'
import { Icon } from '@iconify/react'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../common/Config'

const Register = () => {

    const {
        handleSubmit, register, formState: { errors }, setError
    } = useForm();

    const onSubmit = async (data) => {
        await fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.status === 200) {
                    // success
                } else {
                    const errors = result.errors;
                    Object.keys(errors).forEach(field => {
                        setError(field, { message: errors[field][0] });
                    });
                }

            });

    }

    return (
        <Layout>
            <div className='container py-5 mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8 col-lg-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                                {
                                                ...register("name", { required: " The name is required" })
                                                }
                                                type="text"
                                                id="name"
                                                className={`form-control border-start-0 ps-0 shadow-none ${errors.name && "is-invalid"}`}
                                                placeholder='Name'
                                            />
                                            {errors.name && <span className='invalid-feedback'>{errors.name.message}</span>}
                                        </div>
                                    </div>

                                    <div className='mb-4'>
                                        <label className='form-label fw-medium text-dark' htmlFor="email">Email Address</label>
                                        <div className="input-group custom-input-group">
                                            <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                <Icon icon="ph:envelope-simple" className="fs-5" />
                                            </span>
                                            <input
                                                {...register('email', {
                                                    required: "The email field is required.",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })
                                                }

                                                type="email"
                                                id="email"
                                                className={`form-control border-start-0 ps-0 shadow-none ${errors.email && "is-invalid"}`}
                                                placeholder='Email Address'
                                            />
                                            {errors.email && <span className='invalid-feedback'>{errors.email.message}</span>}
                                        </div>
                                    </div>

                                    <div className='mb-5'>
                                        <label className='form-label fw-medium text-dark' htmlFor="password">Password</label>
                                        <div className="input-group custom-input-group">
                                            <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                <Icon icon="ph:lock-key" className="fs-5" />
                                            </span>
                                            <input

                                                {...register('password', {
                                                    required: "The password field is required.",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be at least 6 characters long"
                                                    }
                                                })}
                                                type="password"
                                                id="password"
                                                className={`form-control border-start-0 ps-0 shadow-none ${errors.password && "is-invalid"}`}
                                                placeholder='Create a strong password'
                                            />
                                            {errors.password && <span className='invalid-feedback'>{errors.password.message}</span>}
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

            <style dangerouslySetInnerHTML={{
                __html: `
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