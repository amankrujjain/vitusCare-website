import React, { useState, useEffect } from 'react';

const Test = () => {
  const [centers, setCenters] = useState([]);  // Initialize centers as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get user's current location and fetch nearby centers
  const getNearbyCenters = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
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
        console.log("API response data:", data); // Log to see structure

        // Assuming the API returns an object with a "centers" array
        if (response.ok && Array.isArray(data.centers)) {
          setCenters(data.centers);  // Ensure we set the array correctly
        } else {
          setError(data.message || 'Error fetching centers');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    }, (err) => {
      setError('Error fetching location');
      setLoading(false);
    });
  };

  useEffect(() => {
    getNearbyCenters();
  }, []);

  if (loading) return <p>Loading nearby centers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Nearby Dialysis Centers</h3>
      {/* Ensure centers is an array before rendering */}
      {Array.isArray(centers) && centers.length === 0 ? (
        <p>No centers found</p>
      ) : (
        <div>
          {centers.map((center, index) => (
            <div key={index}>
              <h4>{center.name_of_centre}</h4>
              <p>{center.address_of_centre}</p>
              <p><strong>Distance:</strong> {center.distance?.toFixed(2)} km</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${center.latitude},${center.longitude}`} target="_blank" rel="noopener noreferrer">View on Map</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Test;
