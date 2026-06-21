import React from 'react';
import { Icon } from '@iconify/react';

const Course = ({ title, level, enrolled, customClasses }) => {
    return (
        <div className={customClasses}>
            <div className='card h-100 border-0 course-card' style={{ borderRadius: '20px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', overflow: 'hidden' }}>
                <div className='card-img-top course-image-wrapper'>
                    <img src={`https://placehold.co/600x350?text=${encodeURIComponent(title)}`} alt={title} className='img-fluid course-image' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className='card-body p-4'>
                    <h3 className="h5 fw-bold text-dark mb-3 course-title" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {title}
                    </h3>
                    <div className="meta d-flex flex-wrap gap-3 py-2 text-muted" style={{ fontSize: '0.9rem' }}>
                        <div className="level d-flex align-items-center">
                            <Icon icon="ph:briefcase-light" className="meta-icon fs-5" />
                            <span className="ps-2">{level}</span>
                        </div>
                        <div className="student d-flex align-items-center">
                            <Icon icon="ph:users-light" className="meta-icon fs-5" />
                            <span className="ps-2">{enrolled} Students</span>
                        </div>
                        <div className="rating d-flex align-items-center">
                            <Icon icon="ph:star-fill" className="rating-icon fs-5" />
                            <span className="ps-2 text-dark fw-semibold">5.0</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">
                    <hr className="my-3 text-muted" style={{ opacity: 0.1 }} />
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="price fw-bold fs-4 text-dark">$50</div>
                        <div className="add-to-cart">
                            <a href="/detail" className="btn course-btn text-white px-4 py-2" style={{ fontWeight: '500' }}>Read More</a>
                        </div>
                    </div>
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
        </div>
    )
}

export default Course;