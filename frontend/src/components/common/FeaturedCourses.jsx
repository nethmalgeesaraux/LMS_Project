import React from 'react'
import Course from './Course'

const FeaturedCourses = () => {
    return (
        <section className='section-3 py-5 bg-white'>
            <div className="container py-4">
                <div className='section-title text-center mb-5'>
                    <span className="d-inline-block mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(29, 165, 153, 0.1)', color: '#1da599', fontWeight: '600', letterSpacing: '1px', fontSize: '0.85rem' }}>
                        POPULAR COURSES
                    </span>
                    <h2 className='display-5 fw-bold text-dark mb-3' style={{ letterSpacing: '-1px' }}>Featured Courses</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                        Discover courses designed to help you excel in your professional and personal growth.
                    </p>
                </div>
                <div className="row gy-4">
                    <Course
                        title='The complete 2025 Web Development Bootcamp'
                        level='Advance'
                        enrolled='120'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='UI/UX Design Masterclass: From Beginner to Pro'
                        level='Beginner'
                        enrolled='85'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='Machine Learning A-Z: AI, Python & R'
                        level='Intermediate'
                        enrolled='210'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='Digital Marketing Strategy for 2025'
                        level='Advance'
                        enrolled='150'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='React Native - The Practical Guide'
                        level='Intermediate'
                        enrolled='320'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='Data Science and Machine Learning Bootcamp'
                        level='Beginner'
                        enrolled='95'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='Mastering Python for Data Analysis'
                        level='Advance'
                        enrolled='140'
                        customClasses="col-lg-3 col-md-6"
                    />
                    <Course
                        title='Fullstack Next.js and GraphQL'
                        level='Intermediate'
                        enrolled='75'
                        customClasses="col-lg-3 col-md-6"
                    />   
                </div>
                <div className="text-center mt-5">
                    <a href="/courses" className="btn course-btn text-white px-5 py-3 rounded-pill fw-bold" style={{ fontSize: '1.05rem', boxShadow: '0 10px 20px rgba(29, 165, 153, 0.2)' }}>
                        View All Courses
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses