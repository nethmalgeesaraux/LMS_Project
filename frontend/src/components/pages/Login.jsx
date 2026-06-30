import React, { useContext } from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../common/Config'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/Auth';

const Login = () => {
    
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const {
        handleSubmit, register, formState: { errors }, setError
    } = useForm();


    const onSubmit = async (data) => {
        await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.status == 200) {
                    const userInfo = {
                        name: result.name,
                        id: result.id,
                        token: result.token,
                    }
                    toast.success(result.message);
                    localStorage.setItem('userInfoLms', JSON.stringify(userInfo));
                    login(userInfo);
                    navigate('/account/dashboard');
                } else {
                    toast.error(result.message);
                }
            });


    }
    return (
        <Layout>
            <div className='container py-5 mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8 col-lg-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='card border-0 login-card'>
                                <div className='card-body p-5'>
                                    <div className="text-center mb-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
                                            <Icon icon="ph:user-circle-light" className="fs-1" style={{ color: '#1da599' }} />
                                        </div>
                                        <h3 className='fw-bold text-dark mb-2'>Welcome Back!</h3>
                                        <p className="text-muted">Please sign in to your account</p>
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

                                    <div className='mb-4'>
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <label className='form-label fw-medium text-dark mb-0' htmlFor="password">Password</label>
                                            <Link to="/forgot-password" className="text-decoration-none" style={{ fontSize: '0.85rem', color: '#1da599' }}>Forgot Password?</Link>
                                        </div>
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
                                                placeholder='password'
                                            />
                                            {errors.password && <span className='invalid-feedback'>{errors.password.message}</span>}
                                        </div>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input custom-checkbox" type="checkbox" value="" id="rememberMe" />
                                        <label className="form-check-label text-muted" htmlFor="rememberMe" style={{ fontSize: '0.9rem' }}>
                                            Remember me
                                        </label>
                                    </div>

                                    <button className='btn w-100 py-3 mb-4 text-white fw-bold login-btn' style={{ backgroundColor: '#1da599', borderRadius: '10px', fontSize: '1.1rem' }}>
                                        Sign In
                                    </button>

                                    <div className="text-center">
                                        <span className="text-muted">Don't have an account? </span>
                                        <Link to={`/account/register`} className='text-decoration-none fw-bold' style={{ color: '#1da599' }}>Register Here</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
            .login-card {
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
            .custom-checkbox:checked {
                background-color: #1da599;
                border-color: #1da599;
            }
            .login-btn {
                transition: all 0.3s ease;
            }
            .login-btn:hover {
                background-color: #15857b !important;
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(29, 165, 153, 0.2);
            }
        `}} />
        </Layout>
    )
}

export default Login