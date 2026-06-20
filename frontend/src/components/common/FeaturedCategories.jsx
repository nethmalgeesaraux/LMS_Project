import React from 'react';
import { Icon } from '@iconify/react';

const categories = [
    { name: "Web Development", icon: "ph:code-light", color: "#1da599" },
    { name: "Mobile Development", icon: "ph:device-mobile-light", color: "#f39c12" },
    { name: "Digital Marketing", icon: "ph:megaphone-light", color: "#e74c3c" },
    { name: "Graphic Design", icon: "ph:pen-nib-light", color: "#9b59b6" },
    { name: "Software Design", icon: "ph:bounding-box-light", color: "#3498db" },
    { name: "Content Writing", icon: "ph:pencil-simple-light", color: "#2ecc71" },
    { name: "Finance", icon: "ph:chart-line-up-light", color: "#f1c40f" },
    { name: "Data Science", icon: "ph:database-light", color: "#34495e" }
];

const FeaturedCategories = () => {
    return (
        <section className='section-2 py-5' style={{ backgroundColor: '#f9fafb' }}>
            <div className="container py-4">
                <div className='section-title text-center mb-5'>
                    <span className="d-inline-block mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(29, 165, 153, 0.1)', color: '#1da599', fontWeight: '600', letterSpacing: '1px', fontSize: '0.85rem' }}>
                        TOP CATEGORIES
                    </span>
                    <h2 className='display-5 fw-bold text-dark mb-3' style={{ letterSpacing: '-1px' }}>Explore Categories</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                        Discover categories designed to help you excel in your professional and personal growth. Start your journey today!
                    </p>
                </div>
                
                <div className='row gy-4'>
                    {categories.map((category, index) => (
                        <div className='col-6 col-md-4 col-lg-3' key={index}>
                            <a href="#" className="text-decoration-none category-card-link d-block h-100">
                                <div className='card h-100 border-0 category-card' style={{ borderRadius: '20px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                    <div className='card-body text-center p-4 p-md-5 d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden'>
                                        
                                        <div className="icon-wrapper mb-4 d-flex align-items-center justify-content-center" style={{ 
                                            width: '75px', 
                                            height: '75px', 
                                            borderRadius: '50%', 
                                            backgroundColor: `${category.color}15`,
                                            color: category.color,
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}>
                                            <Icon icon={category.icon} style={{ fontSize: '2.2rem' }} />
                                        </div>
                                        
                                        <h3 className="h5 fw-bold text-dark mb-2 category-title">{category.name}</h3>
                                        
                                        <div className="explore-text d-flex align-items-center gap-1 mt-2">
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Explore</span>
                                            <Icon icon="ph:arrow-right-bold" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .category-card {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    background-color: #fff;
                    z-index: 1;
                }
                .category-card-link:hover .category-card {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(29, 165, 153, 0.12);
                }
                .category-card-link:hover .icon-wrapper {
                    background-color: #1da599 !important;
                    color: #fff !important;
                    transform: scale(1.15);
                }
                .category-card-link:hover .category-title {
                    color: #1da599 !important;
                }
                .explore-text {
                    opacity: 0;
                    transform: translateY(15px);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    color: #1da599 !important;
                    position: absolute;
                    bottom: 20px;
                }
                .category-card-link:hover .explore-text {
                    opacity: 1;
                    transform: translateY(0);
                }
                .category-card .card-body {
                    padding-bottom: 30px !important; 
                    transition: padding 0.4s ease;
                }
                .category-card-link:hover .card-body {
                    padding-bottom: 50px !important;
                }
                .category-title {
                    transition: color 0.3s ease;
                }
            `}} />
        </section>
    )
}

export default FeaturedCategories;