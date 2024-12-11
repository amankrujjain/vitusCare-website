import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Appointment from '../AppointmentForm/index';

export default function Layout() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle modal visibility
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navItems = [
    {
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="#2c2f76"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
          />
        </svg>
      ),
      link:'/',
    },
    {
      label: 'Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#2c2f76"
            d="M4.616 21q-.691 0-1.153-.462T3 19.385V8.615q0-.69.463-1.152T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v10.769q0 .69-.463 1.153T19.385 21zm0-1h14.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616v10.769q0 .23.192.423t.423.192M10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4 20V8zm7.5-5.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1z"
          />
        </svg>
      ),
      link:'/careers',
    },
    {
      label: 'Appointment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
          <path
            fill="none"
            stroke="#2c2f76"
            d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
          />
        </svg>
      ),
      onClick: handleOpenModal,
    },
    {
      label: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#2c2f76"
            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
          />
        </svg>
      ),
      onClick: () => console.log('WhatsApp'),
    },
  ];

  // Check if the screen size is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Header logoSrc="/images/logo1.png" variant="cs_heading_color" />
      <Outlet />
      <Footer />

      {/* Fixed "Book an Appointment" Div for PC View */}
      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '250px',
            right: '0px',
            zIndex: 1000,
            width: '120px',
            height: '130px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
          }}
          onClick={handleOpenModal}
        >
          <div
            style={{
              transform: 'rotate(-90deg)',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: '0', color: '#2c2f76', fontWeight: 'bold' }}>Book an Appointment</p>
            <div
              style={{
                marginTop: '7px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                padding: '10px',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24">
                <path
                  fill="#2c2f76"
                  d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      {isMobile && (
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        {navItems.map((item, index) => (
           <Link
           to={item.link || '#'}
           key={index}
           style={{
             textDecoration: 'none',
             color: 'inherit',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             fontSize: '12px',
             cursor: 'pointer',
           }}
           onClick={item.onClick}
         >
           <span>{item.icon}</span>
           <p style={{ margin: '5px 0 0', color: '#2c2f76', fontWeight: 'bold' }}>{item.label}</p>
         </Link>
        ))}
      </div>
    )}

      {/* Modal for Appointment Form */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '10px',
              maxWidth: '1000px',
              width: '100%',
            }}
          >
            <button onClick={handleCloseModal} style={{ float: 'right', fontSize: '16px', padding: '5px 10px' }}>
              X
            </button>
            <Appointment onSuccess={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}
