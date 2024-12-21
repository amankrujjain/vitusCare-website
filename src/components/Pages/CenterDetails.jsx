import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import Section from '../Section';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import CenterDetailsSection from './CenterDetailsSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import axios from 'axios';
import BreadcrumbStyleCenter from '../Breadcrumb/BreadcrumbStyleCenter';

export default function CenterDetails() {
  pageTitle('Center Details');

  const { id } = useParams(); // Get the ID from the URL
  const [centerData, setCenterData] = useState(null); // State for fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch center details by ID
  useEffect(() => {
    const fetchCenterDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/centers/${id}`);
        console.log("Response in the center details", response)
        setCenterData(response.data); // Update the state with fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching center details:', error);
        setLoading(false); // Even on error, stop the loading spinner
      }
    };

    fetchCenterDetails();
  }, [id]);

  if (loading) {
    return <div>Loading center details...</div>; // Display a loading state
  }

  if (!centerData) {
    return <div>Center details not found.</div>; // Handle no data
  }

  return (
    <>
      <BreadcrumbStyleCenter centerName={centerData.center.name_of_centre} />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <CenterDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl="/images/doctors/doctor_details.jpeg"
          slogan={"#SirfQualityDialysis"}
          name={centerData.center.city}
          department={centerData.center.name_of_centre}
          designation={centerData.center.name_of_centre}
          description={centerData.center.address_of_centre}
          social={[
            { icon: 'fa:map-marker', href: 'https://maps.app.goo.gl/tS6UsCPW4jb4vjBA9' },
          ]}
          Enquiry={[
            { iconUrl: '/images/icons/call.svg', title: '98628 98628' },
            {
              iconUrl: '/images/icons/envlope.svg',
              title: 'support@vituscare.com',
            },
          ]}
          contactInfoHeading="Enquiry"
          schedules={[
            { day: 'Monday', time: '8:30 AM - 6:30 PM' },
            { day: 'Tuesday', time: '8:30 AM - 6:30 PM' },
            { day: 'Wednesday', time: '8:30 AM - 6:30 PM' },
            { day: 'Thrusday', time: '8:30 AM - 6:30 PM' },
            { day: 'Friday', time: '8:30 AM - 6:30 PM' },
            { day: 'Saturday', time: '8:30 AM - 6:30 PM' },
          ]}
          scheduleHeading="Nephro OPD Timings"
          degrees={[
            {
              title: 'Types Of Dialysis Available',
              subTitle: 'Single-use | Re-use | Emergency',
            },
            {
              title:
                '100% free dialysis ',
              subTitle: 'CM Fund | TPA ( All major partners) | Cash Option also avaiilable',
            },
            {
              subTitle: 'All types of dialysis ( Leading brands only)',
            },
            {
              subTitle:"Nephrologist OPD"
            },
            {
              subTitle:'Emergency Doctor'
            },
            {
              subTitle:'EPO, Supplements'
            },
          ]}
          degreesHeading="Available At The Center"
          experiences={[
            {
              title:
                'NABH Level 2 Accredited',
            },
            {
              title:
                'Empaneled with CGHS, ESI, all major TPA partners',
            },
            {
              title:
                'Multi - Speciaity Hospital with ICU facility',
            },
          ]}
          experiencesHeading="About the hospital"
        />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/Appointment.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/centers/banner_img_3.png"
        />
      </Section>
    </>
  );
}
