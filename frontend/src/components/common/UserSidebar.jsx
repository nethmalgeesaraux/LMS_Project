import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const UserSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
     <div className='card border-0 sidebar-card'>
        <div className='card-body p-4'>
            <ul className="list-unstyled mb-0 sidebar-list">
                <li className='mb-2'>
                    <Link to="/account/dashboard" className={`d-flex align-items-center px-3 py-3 rounded-3 text-decoration-none transition-all ${currentPath === '/account/dashboard' ? 'active-link' : 'inactive-link'}`}>
                        <Icon icon="ph:chart-bar-light" className="fs-4 me-3" /> 
                        <span className="fw-medium">Dashboard</span>
                    </Link>
                </li>
               
                <li className='mb-2'>
                    <Link to="/account/my-learning" className={`d-flex align-items-center px-3 py-3 rounded-3 text-decoration-none transition-all ${currentPath === '/account/my-learning' ? 'active-link' : 'inactive-link'}`}>
                        <Icon icon="ph:graduation-cap-light" className="fs-4 me-3" /> 
                        <span className="fw-medium">My Learning</span>
                    </Link>
                </li>
                
                <li className='mb-2'>
                    <Link to="/account/my-courses" className={`d-flex align-items-center px-3 py-3 rounded-3 text-decoration-none transition-all ${currentPath === '/account/my-courses' ? 'active-link' : 'inactive-link'}`}>
                        <Icon icon="ph:desktop-light" className="fs-4 me-3" /> 
                        <span className="fw-medium">My Courses</span>
                    </Link>
                </li>
                
                <li className='mb-2'>
                    <Link to="#" className={`d-flex align-items-center px-3 py-3 rounded-3 text-decoration-none transition-all inactive-link`}>
                        <Icon icon="ph:lock-key-light" className="fs-4 me-3" /> 
                        <span className="fw-medium">Change Password</span>
                    </Link>
                </li>
                
                <li className='mt-4 pt-4 border-top'>
                    <Link to="/login" className='d-flex align-items-center px-3 py-3 rounded-3 text-decoration-none transition-all logout-link'>
                        <Icon icon="ph:sign-out-light" className="fs-4 me-3" /> 
                        <span className="fw-medium">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>                             
        <style dangerouslySetInnerHTML={{__html: `
            .sidebar-card {
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.03);
            }
            .transition-all {
                transition: all 0.3s ease;
            }
            .inactive-link {
                color: #6c757d;
            }
            .inactive-link:hover {
                background-color: rgba(29, 165, 153, 0.05);
                color: #1da599;
                transform: translateX(5px);
            }
            .active-link {
                background-color: #1da599;
                color: white;
                box-shadow: 0 5px 15px rgba(29, 165, 153, 0.3);
            }
            .logout-link {
                color: #dc3545;
            }
            .logout-link:hover {
                background-color: rgba(220, 53, 69, 0.08);
                color: #dc3545;
                transform: translateX(5px);
            }
        `}} />
    </div>
  )
}

export default UserSidebar