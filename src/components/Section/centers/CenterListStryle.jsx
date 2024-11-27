import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spacing from '../../Spacing';
import Pagination from '../../Pagination';
import CenterStyle from '../../Team/CenterStyle';

export default function CenterListStyle() {
  const [filteredData, setFilteredData] = useState([]); // Centers data
  const [userLocation, setUserLocation] = useState(null); // User's geolocation
  const [searchTerm, setSearchTerm] = useState(''); // Search term

  // Fetch nearby centers based on user's location
  useEffect(() => {
    const fetchNearbyCenters = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/centres/near-by?latitude=${latitude}&longitude=${longitude}`
        );
        console.log('Fetched centres:', response.data.centres);
        setFilteredData(Array.isArray(response.data.centres) ? response.data.centres : []);
      } catch (error) {
        console.error('Error fetching nearby centres:', error);
      }
    };

    // Request user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude }); // Save location
          fetchNearbyCenters(latitude, longitude); // Fetch nearby centers
        },
        async (error) => {
          console.error('Error fetching location:', error);
          await fetchAllCenters(); // Fetch all centers if location fails
        }
      );
    } else {
      fetchAllCenters(); // Fetch all centers if geolocation is not supported
    }
  }, []);

  // Fetch all centers
  const fetchAllCenters = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/get-all-centres');
      console.log('Fetched all centres:', response.data.centres);
      setFilteredData(Array.isArray(response.data.centres) ? response.data.centres : []);
    } catch (error) {
      console.error('Error fetching all centres:', error);
      setFilteredData([]);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  // Filter centers by search term
  const displayedData = filteredData.filter((center) =>
    center.name_of_centre.toLowerCase().includes(searchTerm) ||
    center.city.toLowerCase().includes(searchTerm) ||
    center.state.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="cs_doctors_heading">
        <div className="cs_isotop_filter cs_style1" style={{ width: '80%' }}>
          <ul className="cs_mp0">
            <li>
              <span onClick={fetchAllCenters}>All</span>
            </li>
          </ul>
          <div className="search-container" style={{ width: '100%' }}>
            <div className="col-lg-6 d-flex align-items-center">
              <input
                type="text"
                className="cs_form_field"
                placeholder="Search by center name, city, or state"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <Spacing md="65" />
      <div className="cs_team_grid">
        {displayedData.map((item, index) => (
          <CenterStyle
            key={index}
            id={item._id || index} // Pass ID or fallback to index
            imgUrl={item.imgUrl || ''} // Placeholder for image URL
            name={item.name_of_centre || 'No Name Provided'}
            address={item.address_of_centre || 'No Address Available'}
            phone={item.phone || 'No Phone Available'}
            state={item.state || 'Unknown'}
            city={item.city || 'Unknown'}
            pinCode={item.pin_code || 'No Pin Code'}
            mapLocation={item.map_location || ''}
            distance={item.distance} // Distance from user
          />
        ))}
      </div>
      <Spacing md="90" />
      <Pagination />
    </div>
  );
}
