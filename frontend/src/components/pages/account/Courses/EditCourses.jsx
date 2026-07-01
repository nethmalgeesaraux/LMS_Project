import React from 'react'
import Layout from '../../../common/Layout'
import UserSidebar from '../../../common/UserSidebar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiUrl, token } from '../../../common/Config'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'

const EditCourses = () => {
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
                    navigate('/account/courses/edit/' + result.data.id);
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
                            <li className="breadcrumb-item"><Link to="/account" className="text-decoration-none" style={{ color: '#1da599' }}>Account</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Edit Courses</li>
                        </ol>
                    </nav>
                    <div className='row'>
                        <div className='col-md-12 mt-5 mb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2 className='h4 mb-0 pb-0 fw-bold'>Edit Courses</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 account-sidebar'>
                            <UserSidebar />
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className='col-12'>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className='card border-0 course-card'>
                                                <div className='card-body p-4 p-md-5'>
                                                    
                                                    <div className="mb-4">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3" style={{ width: '50px', height: '50px' }}>
                                                                <Icon icon="ph:pencil-simple-light" className="fs-3" style={{ color: '#1da599' }} />
                                                            </div>
                                                            <div>
                                                                <h5 className="fw-bold mb-0">Course Details</h5>
                                                                <p className="text-muted mb-0 small">Update the main information of your course</p>
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
                                                            <p className='text-danger mt-1' style={{ fontSize: '0.875em' }}>{errors.title.message}</p>
                                                        )}
                                                    </div>

                                                    <div className="row">
                                                        <div className='col-md-6 mb-4'>
                                                            <label className='form-label fw-medium text-dark' htmlFor='category'>Category</label>
                                                            <div className="input-group custom-input-group">
                                                                <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                                    <Icon icon="ph:folder-light" className="fs-5" />
                                                                </span>
                                                                <select
                                                                    {...register('category')}
                                                                    id="category"
                                                                    className="form-select border-start-0 ps-0 shadow-none"
                                                                >
                                                                    <option value="">Select Category</option>
                                                                    <option value="1">Web Development</option>
                                                                    <option value="2">Data Science</option>
                                                                    <option value="3">Design</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='col-md-6 mb-4'>
                                                            <label className='form-label fw-medium text-dark' htmlFor='level'>Level</label>
                                                            <div className="input-group custom-input-group">
                                                                <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                                    <Icon icon="ph:stairs-light" className="fs-5" />
                                                                </span>
                                                                <select
                                                                    {...register('level')}
                                                                    id="level"
                                                                    className="form-select border-start-0 ps-0 shadow-none"
                                                                >
                                                                    <option value="">Select Level</option>
                                                                    <option value="beginner">Beginner</option>
                                                                    <option value="intermediate">Intermediate</option>
                                                                    <option value="advanced">Advanced</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='mb-4'>
                                                        <label className='form-label fw-medium text-dark' htmlFor='language'>Language</label>
                                                        <div className="input-group custom-input-group">
                                                            <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                                <Icon icon="ph:globe-light" className="fs-5" />
                                                            </span>
                                                            <select
                                                                {...register('language')}
                                                                id="language"
                                                                className="form-select border-start-0 ps-0 shadow-none"
                                                            >
                                                                <option value="">Select Language</option>
                                                                <option value="english">English</option>
                                                                <option value="sinhala">Sinhala</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className='mb-5'>
                                                        <label className='form-label fw-medium text-dark' htmlFor='description'>Description</label>
                                                        <textarea
                                                            {...register('description')}
                                                            id="description"
                                                            className="form-control custom-textarea shadow-none"
                                                            placeholder='Write a detailed description for this course...'
                                                            rows="5"
                                                        ></textarea>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3" style={{ width: '50px', height: '50px' }}>
                                                                <Icon icon="ph:currency-circle-dollar-light" className="fs-3" style={{ color: '#1da599' }} />
                                                            </div>
                                                            <div>
                                                                <h5 className="fw-bold mb-0">Pricing</h5>
                                                                <p className="text-muted mb-0 small">Set the sell and crossed out price</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className='col-md-6 mb-4'>
                                                            <label className='form-label fw-medium text-dark' htmlFor='sellPrice'>Sell Price ($)</label>
                                                            <div className="input-group custom-input-group">
                                                                <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                                    <Icon icon="ph:tag-light" className="fs-5" />
                                                                </span>
                                                                <input type='text'
                                                                    {...register('sellPrice')}
                                                                    id="sellPrice"
                                                                    className="form-control border-start-0 ps-0 shadow-none"
                                                                    placeholder='0.00'
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6 mb-4'>
                                                            <label className='form-label fw-medium text-dark' htmlFor='crossPrice'>Cross Price ($)</label>
                                                            <div className="input-group custom-input-group">
                                                                <span className="input-group-text bg-white border-end-0 text-muted px-3">
                                                                    <Icon icon="ph:tag-chevron-light" className="fs-5" />
                                                                </span>
                                                                <input type='text'
                                                                    {...register('crossPrice')}
                                                                    id="crossPrice"
                                                                    className="form-control border-start-0 ps-0 shadow-none"
                                                                    placeholder='0.00'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr className='my-4' />

                                                    <button className='btn text-white fw-bold course-btn px-5 py-3 w-100' style={{ backgroundColor: '#1da599', borderRadius: '10px', fontSize: '1.1rem' }}>
                                                        Update Course Details <Icon icon="ph:check-circle-light" className="ms-2 fs-5" style={{ marginBottom: '2px' }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='col-md-5'>
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
                .custom-input-group .form-control, .custom-input-group .form-select, .custom-input-group .input-group-text {
                    border-color: #e5e7eb;
                    padding-top: 0.8rem;
                    padding-bottom: 0.8rem;
                    transition: all 0.3s ease;
                }
                .custom-input-group:focus-within .form-control, .custom-input-group:focus-within .form-select, .custom-input-group:focus-within .input-group-text {
                    border-color: #1da599;
                }
                .custom-input-group .form-control:focus, .custom-input-group .form-select:focus {
                    background-color: transparent;
                }
                .custom-textarea {
                    border-color: #e5e7eb;
                    padding: 1rem;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                .custom-textarea:focus {
                    border-color: #1da599;
                    box-shadow: 0 0 0 0.25rem rgba(29, 165, 153, 0.1) !important;
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

export default EditCourses