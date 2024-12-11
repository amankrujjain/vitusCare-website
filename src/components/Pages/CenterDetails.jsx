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
          name={"#SirfQualityDialysis in - " + centerData.center.state}
          department={centerData.center.name_of_centre}
          designation={centerData.center.name_of_centre}
          description={centerData.center.address_of_centre}
          social={[
            { icon: 'fa6-brands:facebook-f', href: '/about' },
            { icon: 'fa6-brands:linkedin-in', href: '/about' },
            { icon: 'fa6-brands:twitter', href: '/about' },
          ]}
          Enquiry={[
            { iconUrl: '/images/icons/call.svg', title: centerData.center.phone },
            {
              iconUrl: '/images/icons/envlope.svg',
              title: 'support@vituscare.com',
            },
          ]}
          contactInfoHeading="Enquiry"
          schedules={[
            { day: 'Everyday', time: centerData.center.additional_details.Timing_of_centre },
          ]}
          scheduleHeading="Hospital Timings"
          degrees={[
            {
              title: 'University of California, San Francisco.',
              subTitle: 'Medical degree',
            },
            {
              title:
                'University of California, Los Angeles (UCLA) Medical Center.',
              subTitle: 'Completed residency training in psychiatry',
            },
            {
              title: 'University of California, Berkeley.',
              subTitle: 'Master of Public Health degree',
            },
          ]}
          degreesHeading="Available At The Center"
          experiences={[
            {
              title:
                'Worked in community mental health clinics, private practice, and academic medical centers.',
            },
            {
              title:
                'Expertise in the treatment of mood disorders, anxiety disorders, and psychotic disorders.',
            },
            {
              title: `Special interest in women's mental health and perinatal psychiatry.`,
            },
            {
              title:
                'Experience managing complex cases that involve both mental health and medical issues.',
            },
          ]}
          experiencesHeading="Experiences"
          awards={[
            { title: 'Fellow of the American Psychiatric Association (FAPA).' },
            {
              title:
                'Recognized for research contributions with grants from the National Institute of Mental Health (NIMH) and the American Foundation for Suicide Prevention.',
            },
          ]}
          awardHeading="Awards/Achievements"
        />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
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
