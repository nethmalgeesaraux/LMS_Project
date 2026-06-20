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
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .course-card {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    background-color: #fff;
                }
                .course-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(29, 165, 153, 0.12);
                }
                .course-title {
                    transition: color 0.3s ease;
                }
                .course-card:hover .course-title {
                    color: #1da599 !important;
                }
                .course-image-wrapper {
                    overflow: hidden;
                }
                .course-image {
                    transition: transform 0.5s ease;
                }
                .course-card:hover .course-image {
                    transform: scale(1.05);
                }
                .course-btn {
                    background-color: #1da599;
                    border-color: #1da599;
                    transition: all 0.3s ease;
                    border-radius: 8px;
                }
                .course-btn:hover {
                    background-color: #15857b;
                    border-color: #15857b;
                    transform: translateY(-2px);
                }
                .meta-icon {
                    color: #1da599;
                }
                .rating-icon {
                    color: #f1c40f;
                }
            `}} />
        </section>
    )
}

export default FeaturedCourses