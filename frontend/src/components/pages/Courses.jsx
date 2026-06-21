import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Course from '../common/Course'
import { Icon } from '@iconify/react';

const Courses = () => {
  return (
    <>
      <Header />
      <div className='container pb-5 pt-4'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none custom-breadcrumb-link">Home</a></li>
            <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#1da599' }}>Courses</li>
          </ol>
        </nav>
        <div className='row gy-4'>
          <div className='col-lg-3'>
            <div className='sidebar card border-0 custom-sidebar'>
              <div className='card-body p-4'>
                <div className="search-wrapper mb-4 position-relative">
                  <Icon icon="ph:magnifying-glass" className="position-absolute search-icon" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '1.2rem' }} />
                  <input type="text" className='form-control custom-search-input ps-5' placeholder='Search courses...' />
                </div>

                <div className='pt-2'>
                  <h3 className='h6 fw-bold mb-3 text-uppercase text-muted' style={{ letterSpacing: '1px', fontSize: '0.8rem' }}>Category</h3>
                  <ul className="list-unstyled mb-4">
                    {["Web Development", "Mobile Development", "Digital Marketing", "Graphic Design", "Software Design"].map((cat, idx) => (
                      <li key={idx} className="mb-2">
                        <div className="form-check custom-checkbox">
                          <input className="form-check-input" type="checkbox" value="" id={`cat-${idx}`} />
                          <label className="form-check-label text-muted" htmlFor={`cat-${idx}`}>
                            {cat}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='h6 fw-bold mb-3 text-uppercase text-muted' style={{ letterSpacing: '1px', fontSize: '0.8rem' }}>Level</h3>
                  <ul className="list-unstyled mb-4">
                    {["Beginner", "Intermediate", "Advance"].map((level, idx) => (
                      <li key={idx} className="mb-2">
                        <div className="form-check custom-checkbox">
                          <input className="form-check-input" type="checkbox" value="" id={`lvl-${idx}`} />
                          <label className="form-check-label text-muted" htmlFor={`lvl-${idx}`}>
                            {level}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='h6 fw-bold mb-3 text-uppercase text-muted' style={{ letterSpacing: '1px', fontSize: '0.8rem' }}>Language</h3>
                  <ul className="list-unstyled mb-4">
                    {["English", "Hindi", "Spanish", "German", "Italian"].map((lang, idx) => (
                      <li key={idx} className="mb-2">
                        <div className="form-check custom-checkbox">
                          <input className="form-check-input" type="checkbox" value="" id={`lang-${idx}`} />
                          <label className="form-check-label text-muted" htmlFor={`lang-${idx}`}>
                            {lang}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className='btn w-100 mt-2 custom-clear-btn'>Clear All Filters</a>
              </div>
            </div>
          </div>

          <div className='col-lg-9'>
            <section className='section-3'>
              <div className='d-flex justify-content-between mb-4 align-items-center bg-white p-3 rounded-4 custom-sort-bar'>
                <div className='h6 mb-0 text-muted fw-medium'>
                  Showing <span className="text-dark fw-bold">8</span> courses
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted d-none d-sm-inline" style={{ fontSize: '0.9rem' }}>Sort by:</span>
                  <select className='form-select custom-select border-0 bg-light fw-medium' style={{ width: 'auto', borderRadius: '10px' }}>
                    <option value="0">Newest First</option>
                    <option value="1">Oldest First</option>
                  </select>
                </div>
              </div>
              <div className="row gy-4">
                <Course
                  title='The complete 2025 Web Development Bootcamp'
                  level='Advance'
                  enrolled='120'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='UI/UX Design Masterclass: From Beginner to Pro'
                  level='Beginner'
                  enrolled='85'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='Machine Learning A-Z: AI, Python & R'
                  level='Intermediate'
                  enrolled='210'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='Digital Marketing Strategy for 2025'
                  level='Advance'
                  enrolled='150'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='React Native - The Practical Guide'
                  level='Intermediate'
                  enrolled='320'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='Data Science and Machine Learning Bootcamp'
                  level='Beginner'
                  enrolled='95'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='Mastering Python for Data Analysis'
                  level='Advance'
                  enrolled='140'
                  customClasses="col-lg-4 col-md-6"
                />
                <Course
                  title='Fullstack Next.js and GraphQL'
                  level='Intermediate'
                  enrolled='75'
                  customClasses="col-lg-4 col-md-6"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
                .custom-sidebar {
                    box-shadow: 0 4px 25px rgba(0,0,0,0.03);
                    border-radius: 20px;
                    position: sticky;
                    top: 100px;
                }
                .custom-search-input {
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    transition: all 0.3s ease;
                    background-color: #f9fafb;
                }
                .custom-search-input:focus {
                    box-shadow: 0 0 0 4px rgba(29, 165, 153, 0.1);
                    border-color: #1da599;
                    background-color: #fff;
                }
                .custom-search-input:focus + .search-icon {
                    color: #1da599 !important;
                }
                .custom-checkbox .form-check-input {
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .custom-checkbox .form-check-input:checked {
                    background-color: #1da599;
                    border-color: #1da599;
                }
                .custom-checkbox .form-check-label {
                    cursor: pointer;
                    transition: color 0.2s ease;
                }
                .custom-checkbox:hover .form-check-label {
                    color: #1da599 !important;
                }
                .custom-clear-btn {
                    background-color: rgba(29, 165, 153, 0.1);
                    color: #1da599;
                    border: none;
                    border-radius: 10px;
                    padding: 10px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                .custom-clear-btn:hover {
                    background-color: #1da599;
                    color: #fff;
                }
                .custom-breadcrumb-link {
                    color: #6b7280;
                    transition: color 0.3s ease;
                }
                .custom-breadcrumb-link:hover {
                    color: #1da599;
                }
                .custom-sort-bar {
                    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
                }
                .custom-select:focus {
                    box-shadow: 0 0 0 3px rgba(29, 165, 153, 0.1);
                    border-color: #1da599 !important;
                }
            `}} />
    </>
  )
}

export default Courses