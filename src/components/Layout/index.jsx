import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Appointment from '../AppointmentForm/index';

export default function Layout() {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      
      <Header logoSrc="/images/logo1.png" variant="cs_heading_color" />
      <Outlet />
      <Footer />

      {/* Fixed Square Div with Text and Icon */}
      <div
        style={{
          position: 'fixed',
          top: '250px',
          right: '0px', // Stick to the right edge of the screen (near the scrollbar)
          zIndex: 1000,
          width: '120px', // Make the div a square
          height: '130px',
          backgroundColor: '#fff',
          borderRadius: '15px', // Slightly rounded corners
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transform: 'rotate(90deg)', // Rotate the entire container div
          transformOrigin: 'center',
        }}
        onClick={handleOpenModal} // Open the modal on click
      >
        {/* Inside content that will rotate back */}
        <div
          style={{
            transform: 'rotate(-90deg)', // Rotate content back to keep it upright
            textAlign: 'center',
          }}
        >
          {/* Text */}
          <p style={{ margin: '0', color: '#2c2f76', fontWeight: 'bold' }}>Book an Appointment</p>

          {/* Icon */}
          <div
            style={{
              marginTop: '7px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            {/* SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24">
              <path
                fill="#2c2f76"
                d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal for Appointment Form */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
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
              maxWidth: '1000px', // Increased width of the popup
              width: '100%',
            }}
          >
            <button onClick={handleCloseModal} style={{ float: 'right', fontSize: '16px', padding: '5px 10px' }}>X</button>
            <Appointment onSuccess={handleCloseModal}/>
          </div>
        </div>
      )}
    </>
  );
}
