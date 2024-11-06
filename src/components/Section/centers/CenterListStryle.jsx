import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spacing from '../../Spacing';
import Pagination from '../../Pagination';
import CenterStyle from '../../Team/CenterStyle';

export default function CenterListStyle() {
  const [filteredData, setFilteredData] = useState([]); // Initialize with an empty array
  const [userLocation, setUserLocation] = useState(null); // State for user location

  // Fetch nearby centers based on user's location
  useEffect(() => {
    const fetchNearbyCenters = async (latitude, longitude) => {
      try {
        const response = await axios.get(`http://localhost:7000/api/centres/near-by?latitude=${latitude}&longitude=${longitude}`);
        console.log("Fetched centres:", response.data.centres); // Log the fetched centres
        setFilteredData(Array.isArray(response.data.centres) ? response.data.centres : []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching nearby centres:", error);
      }
    };

    // Request user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude }); // Save user location
          fetchNearbyCenters(latitude, longitude); // Fetch nearby centres
        },
        async (error) => {
          console.error("Error fetching location:", error);
          // If permission is denied, fetch all centres
          await fetchAllCenters();
        }
      );
    } else {
      // If geolocation is not supported, fetch all centres
      fetchAllCenters();
    }
  }, []);

  // Function to fetch all centres
  const fetchAllCenters = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/get-all-centres');
      console.log("Fetched all centres:", response.data.centres); // Log the fetched centres
      setFilteredData(Array.isArray(response.data.centres) ? response.data.centres : []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching all centres:", error);
      setFilteredData([]); // Reset state on error
    }
  };

  return (
    <div className="container">
      <div className="cs_doctors_heading">
        <div className="cs_isotop_filter cs_style1" style={{ width: "80%" }}>
          <ul className="cs_mp0">
            <li>
              <span onClick={fetchAllCenters}>All</span>
            </li>
          </ul>
          <div className="search-container" style={{ width: "100%" }}>
            <div className="col-lg-6 d-flex align-items-center">
              <input 
                type="text" 
                className="cs_form_field" 
                placeholder="Enter Your Search" 
                onChange={(e) => {
                  const value = e.target.value;
                  // Implement your filtering logic here if needed
                }} 
              />
            </div>
          </div>
        </div>
      </div>
      <Spacing md="65" />
      <div className="cs_team_grid">
        {filteredData.map((item, index) => (
          <CenterStyle 
            key={index}
            imgUrl={item.imgUrl || ''} // Placeholder for image URL
            name={item.name_of_centre}
            address={item.address_of_centre}
            phone={item.phone}
            state={item.state}
            city={item.city}
            pinCode={item.pin_code}
            mapLocation={item.map_location}
            distance={item.distance} // Distance from the user's location
          />
        ))}
      </div>
      <Spacing md="90" />
      <Pagination />
    </div>
  );
}
