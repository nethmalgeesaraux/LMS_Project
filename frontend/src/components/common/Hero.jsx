import React from 'react';

const Hero = () => {
  return (
    <div className="position-relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background Video */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: -1 }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="position-absolute w-100 h-100 bg-dark" style={{ top: 0, left: 0, opacity: 0.6 }}></div>
      </div>

      <section className='section-1 d-flex align-items-center' style={{ minHeight: '100vh', zIndex: 1, backgroundColor: 'transparent' }}>
        <div className='container'>
            <div className="row justify-content-center text-center">
                <div className="col-md-8 text-white">
                    <h1 className="display-3 fw-bold mb-4">Learn Anytime, Anywhere</h1>
                    <p className="lead mb-4">Join our Learning Management System and explore a wide range of courses to enhance your skills and achieve your goals.</p>
                    <a href="/courses" className="btn btn-light btn-lg px-5 py-3 custom-btn-primary fw-bold rounded-pill">Explore Courses</a>
                </div>
            </div>            
        </div>
      </section>
    </div>
  );
};

export default Hero;