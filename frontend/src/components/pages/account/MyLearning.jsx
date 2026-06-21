import React from 'react'
import Layout from '../../common/Layout'
import UserSidebar from '../../common/UserSidebar'
import CourseEnrolled from '../../common/CourseEnrolled'

const MyLearning = () => {
  return (
    <Layout>
       <section className='section-4 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2 className='h3 mb-0 fw-bold text-dark'>My Learning</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 account-sidebar mb-4 mb-lg-0'>
                           <UserSidebar/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row gy-4'>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>                                
                                <CourseEnrolled/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
  )
}

export default MyLearning