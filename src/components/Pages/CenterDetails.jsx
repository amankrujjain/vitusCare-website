import React from 'react';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import Section from '../Section';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import CenterDetailsSection from './CenterDetailsSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';

export default function CenterDetails() {
  pageTitle('Center Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <CenterDetailsSection
          bgUrl="/images/centers/center_details_bg.svg"
          imgUrl="/images/centers/center_details.jpeg"
          name="VitusCare Dialysis Center"
          location="Los Angeles, CA"
          contactInfo={[
            { iconUrl: '/images/icons/call.svg', title: '+123-456-7890' },
            {
              iconUrl: '/images/icons/envlope.svg',
              title: 'info@VitusCare.com',
            },
          ]}
          contactInfoHeading="Contact Info"
          services={[
            { title: 'Hemodialysis' },
            { title: 'Peritoneal Dialysis' },
            { title: 'Home Dialysis' },
          ]}
          servicesHeading="Services"
          operatingHours={[
            { day: 'Monday-Friday', time: '08:00 AM - 06:00 PM' },
            { day: 'Saturday', time: '09:00 AM - 01:00 PM' },
          ]}
          operatingHoursHeading="Operating Hours"
          awards={[
            { title: 'Accredited by the Renal Care Association.' },
            {
              title:
                'Recipient of the Excellence in Patient Care Award, 2023.',
            },
          ]}
          awardsHeading="Awards & Achievements"
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
