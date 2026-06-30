import React from 'react'
import Layout from '../../common/Layout'
import { Link } from 'react-router-dom'
import UserSidebar from '../../common/UserSidebar'
import { Icon } from '@iconify/react'

const Dashboard = () => {
  return (
    <Layout>
      <section className='section-4'>
        <div className='container pb-5 pt-3'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/account" className="text-decoration-none" style={{color: '#1da599'}}>Account</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>
          <div className='row'>
            <div className='col-md-12 mt-5 mb-3'>
              <div className='d-flex justify-content-between'>
                <h2 className='h4 mb-0 pb-0 fw-bold'>Dashboard</h2>
              </div>
            </div>
            <div className='col-lg-3 account-sidebar'>
              <UserSidebar />
            </div>
            <div className='col-lg-9'>
              <div className='row'>
                <div className='col-md-4 mb-4'>
                  <div className='card border-0 dashboard-card h-100'>
                    <div className='card-body p-4 d-flex flex-column justify-content-center'>
                      <div className='d-flex align-items-center mb-3'>
                        <div className="d-flex align-items-center justify-content-center rounded-circle me-3" style={{ minWidth: '60px', height: '60px', backgroundColor: 'rgba(29, 165, 153, 0.1)' }}>
                          <Icon icon="ph:currency-circle-dollar-light" className="fs-1" style={{ color: '#1da599' }} />
                        </div>
                        <div>
                          <h3 className='fw-bold mb-0'>0</h3>
                          <span className="text-muted">Sales</span>
                        </div>
                      </div>
                      <div style={{ height: '38px' }}></div> {/* Spacer for alignment */}
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <div className='card border-0 dashboard-card h-100'>
                    <div className='card-body p-4 d-flex flex-column justify-content-center'>
                      <div className='d-flex align-items-center mb-3'>
                        <div className="d-flex align-items-center justify-content-center rounded-circle me-3" style={{ minWidth: '60px', height: '60px', backgroundColor: 'rgba(29, 165, 153, 0.1)' }}>
                          <Icon icon="ph:users-light" className="fs-1" style={{ color: '#1da599' }} />
                        </div>
                        <div>
                          <h3 className='fw-bold mb-0'>0</h3>
                          <span className="text-muted">Enrolled Users</span>
                        </div>
                      </div>
                      <div style={{ height: '38px' }}></div> {/* Spacer for alignment */}
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <div className='card border-0 dashboard-card h-100'>
                    <div className='card-body p-4 d-flex flex-column justify-content-center'>
                      <div className='d-flex align-items-center mb-3'>
                        <div className="d-flex align-items-center justify-content-center rounded-circle me-3" style={{ minWidth: '60px', height: '60px', backgroundColor: 'rgba(29, 165, 153, 0.1)' }}>
                          <Icon icon="ph:monitor-play-light" className="fs-1" style={{ color: '#1da599' }} />
                        </div>
                        <div>
                          <h3 className='fw-bold mb-0'>0</h3>
                          <span className="text-muted">Active Courses</span>
                        </div>
                      </div>
                      <Link to="/admin/orders" className="text-decoration-none fw-medium text-center dashboard-link d-block w-100">
                        View Courses <Icon icon="ph:arrow-right" className="ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
            .dashboard-card {
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                transition: all 0.3s ease;
            }
            .dashboard-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 45px rgba(29, 165, 153, 0.1);
            }
            .dashboard-link {
                color: #1da599;
                transition: all 0.3s ease;
                padding: 8px;
                border-radius: 10px;
                background-color: rgba(29, 165, 153, 0.05);
            }
            .dashboard-link:hover {
                background-color: rgba(29, 165, 153, 0.1);
                color: #15857b;
            }
        `}} />
      </section>
    </Layout>
  )
}

export default Dashboard