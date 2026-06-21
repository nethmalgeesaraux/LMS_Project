import React from 'react'
import Layout from '../../common/Layout'
import { Link } from 'react-router-dom'
import UserSidebar from '../../common/UserSidebar'
import CourseEdit from '../../common/CourseEdit'
import { Icon } from '@iconify/react'

const MyCourses = () => {
  return (
    <Layout>
      <section className='section-4 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2 className='h3 mb-0 fw-bold text-dark'>My Courses</h2>
                                <Link to="/account/my-courses/create" className='btn px-4 py-2 text-white fw-medium create-btn' style={{ backgroundColor: '#1da599', borderRadius: '10px' }}>
                                    <Icon icon="ph:plus-bold" className="me-2" />
                                    Create Course
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-3 account-sidebar mb-4 mb-lg-0'>
                            <UserSidebar/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row gy-4'>
                                <CourseEdit/>                     
                                <CourseEdit/>                     
                                <CourseEdit/>                     
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style dangerouslySetInnerHTML={{__html: `
                .create-btn {
                    transition: all 0.3s ease;
                }
                .create-btn:hover {
                    background-color: #15857b !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(29, 165, 153, 0.2);
                }
            `}} />
    </Layout>
  )
}

export default MyCourses