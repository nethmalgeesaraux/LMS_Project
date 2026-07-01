import React from 'react'
import Layout from '../../../common/Layout'
import UserSidebar from '../../../common/UserSidebar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiUrl , token} from '../../../common/Config'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'

const CreateCourses = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

     const onSubmit = async (data) => {
            await fetch(`${apiUrl}/courses`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.status == 200) {
                        toast.success("Course created successfully!");
                        navigate('/account/courses/edit/'+ result.data.id);
                    } else {
                        toast.error(result.message);
                    }
                });
    
    
        }

    return (
        <Layout>
            <section className='section-4'>
                <div className='container pb-5 pt-3'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/account" className="text-decoration-none" style={{color: '#1da599'}}>Account</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Create Courses</li>
                        </ol>
                    </nav>
                    <div className='row'>
                        <div className='col-md-12 mt-5 mb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2 className='h4 mb-0 pb-0 fw-bold'>Create Courses</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 account-sidebar'>
                            <UserSidebar />
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-12'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='card border-0 course-card'>
                                            <div className='card-body p-4 p-md-5'>
                                                <div className="mb-4">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3" style={{ width: '50px', height: '50px' }}>
                                                            <Icon icon="ph:plus-circle-light" className="fs-3" style={{ color: '#1da599' }} />
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold mb-0">New Course</h5>
                                                            <p className="text-muted mb-0 small">Get started by entering a title for your course</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mb-4'>
                                                    <label className='form-label fw-medium text-dark' htmlFor='title'>Course Title</label>
                                                    <div className="input-group custom-input-group">
                                                        <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                            <Icon icon="ph:text-t-light" className="fs-5" />
                                                        </span>
                                                        <input type='text'
                                                            {...register('title', {
                                                                required: "The title field is required."
                                                            })}
                                                            id="title"
                                                            className={`form-control border-start-0 ps-0 shadow-none ${errors.title ? "is-invalid" : ""}`}
                                                            placeholder='e.g. Advanced Web Development'
                                                        />
                                                    </div>
                                                    {errors.title && (
                                                        <p className='text-danger mt-1' style={{fontSize: '0.875em'}}>{errors.title.message}</p>
                                                    )}
                                                </div>
                                                <button className='btn text-white fw-bold course-btn px-4 py-2' style={{ backgroundColor: '#1da599', borderRadius: '10px' }}>
                                                    Continue <Icon icon="ph:arrow-right" className="ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                .course-card {
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                    transition: all 0.3s ease;
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
                .course-btn {
                    transition: all 0.3s ease;
                }
                .course-btn:hover {
                    background-color: #15857b !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(29, 165, 153, 0.2);
                }
            `}} />
            </section>

        </Layout>
    )
}

export default CreateCourses