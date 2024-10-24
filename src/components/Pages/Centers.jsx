import React, { useEffect, useState } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2'; // You can reuse this for layout
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

export default function Centers() {
  pageTitle('Centers');
  
  // State to hold center data
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch centers from API
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/centres'); // Replace with your API endpoint
        const data = await response.json();
        setCenters(data.centers || []); // Assuming API returns { centers: [] }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch centers');
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  if (loading) {
    return <p>Loading centers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/centers/banner_bg.svg"
        imgUrl="/images/centers/banner_img.png"
        title="Our Locations"
        subTitle="Find all our centers spread across different cities"
      />

      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <div className="cs_centers_list">
          {centers.length > 0 ? (
            centers.map((center, index) => (
              <div key={index} className="center_card">
                <h3 className="center_name">{center.name_of_centre}</h3>
                <p className="center_address">{center.address_of_centre}</p>
                <p className="center_city_state">
                  {center.city}, {center.state}
                </p>
                <p className="center_pincode">Pin Code: {center.pin_code}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${center.latitude},${center.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view_on_map_link"
                >
                  View on Map
                </a>
              </div>
            ))
          ) : (
            <p>No centers available.</p>
          )}
        </div>
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/centers/banner_bg_2.jpeg"
          title="Visit Our Nearest Center"
          subTitle="Schedule an appointment or visit one of our healthcare centers today!"
        />
      </Section>
    </>
  );
}
