import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import FunFactSection from '../Section/FunFactSection';
import Section from '../Section';
import CenterSectionStyle3 from '../CenterStryleSection/CenterSectionStyle3'; // Import the center section
import toast from 'react-hot-toast';

const funFactData = [
  { number: '50+', title: 'Operational Cities' },
  { number: '25,000', title: 'Satisfied Patients' },
  { number: '51,00,000', title: 'Sessions Completed' },
];

export default function Hero({
  title = '',
  subTitle = '',
  imgUrl,
  videoBtnText,
  videoUrl,
  btnText,
  btnUrl,
}) {
  const [showSearchModal, setShowSearchModal] = useState(false); // State to control modal visibility
  const [centers, setCenters] = useState([]);  // Initialize centers as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Toggle search modal visibility
  const handleOpenSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  // Function to get user's current location and fetch nearby centers
  const getNearbyCenters = () => {
    setLoading(true);
    
    // Show a loading toast while fetching the user's location
    const locationToastId = toast.loading('Fetching your location...');
  
    // Get user location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        try {
          // Fetch nearby centers from the API
          const response = await fetch(`http://localhost:7000/api/centres/near-by?latitude=${latitude}&longitude=${longitude}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          console.log("API response data:", data);
  
          if (response.ok && Array.isArray(data.centers)) {
            setCenters(data.centers);
            handleOpenSearchModal(); // Open modal once data is fetched
            toast.success('Nearby centers found!');
          } else {
            setError(data.message || 'Error fetching centers');
            toast.error('Unable to fetch centers. Please try again.');
          }
        } catch (err) {
          setError('Error fetching data');
          toast.error('Server error: Unable to fetch data.');
        } finally {
          toast.dismiss(locationToastId); // Dismiss the loading toast
          setLoading(false);
        }
      },
      (error) => {
        // Location error handling
        toast.dismiss(locationToastId); // Dismiss the loading toast
        
        if (error.code === error.PERMISSION_DENIED) {
          setError('Location access denied');
          toast.error('Location access denied. Please enable location.');
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError('Location information is unavailable');
          toast.error('Location unavailable. Please try again.');
        } else if (error.code === error.TIMEOUT) {
          setError('Location request timed out');
          toast.error('Location request timed out. Please try again.');
        } else {
          setError('Error fetching location');
          toast.error('Error fetching location. Please check your settings.');
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: true, // Request high-accuracy location (optional)
        timeout: 10000, // Maximum time before error is triggered
        maximumAge: 0, // No caching of location
      }
    );
  };
  

  return (
    <>
      <section className="cs_hero cs_style_1">
        <div className="cs_hero_wrap cs_bg_filed">
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="blue_color cs_hero_title cs_fs_94">
                {typeof title === 'string' ? parse(title) : ''}
              </h1>
              <p className="text_color cs_hero_subtitle cs_fs_20 cs_heading_color">
                {typeof subTitle === 'string' ? parse(subTitle) : ''}
              </p>
              <div className="cs_hero_btn_wrap ">
                <VideoModal
                  videoUrl={videoUrl}
                  videoBtnText={videoBtnText}
                  variant="cs_heading_color red_blue"
                />
              </div>
            </div>
            <img src={imgUrl} alt="Hero" className="cs_hero_img" />

            {/* Locate Us Section with Search Input */}
            <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15 d-flex align-items-center justify-content-evenly">
              <h1 className="blue_color">Locate Us</h1>

              <div className="d-flex align-items-center w-full justify-content-center" style={{ flexGrow: 1 }}>
                <form className="d-flex" role="search" style={{ width: '80%' }}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Enter your city or state"
                    aria-label="Search"
                  />
                  <button
                    className="btn blue_color"
                    style={{ border: '2px solid ' }}
                    type="button" // Change to "button" to prevent form submission
                    onClick={getNearbyCenters} // Fetch centers on button click
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>

      {/* Search Modal for Locate Us */}
      {showSearchModal && (
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
            <button onClick={handleCloseSearchModal} style={{ float: 'right', fontSize: '16px', padding: '5px 10px' }}>X</button>
            <h2>Nearby Dialysis Centers</h2>
            {loading && <p>Loading nearby centers...</p>}
            {error && <p>{error}</p>}
            {Array.isArray(centers) && centers.length === 0 && !loading && !error ? (
              <p>No centers found</p>
            ) : (
              <CenterSectionStyle3 data={centers} /> // Render the slider within the modal
            )}
          </div>
        </div>
      )}
    </>
  );
}
