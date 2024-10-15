import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import Section from '../Section';
import DepartmentSectionStyle2 from '../Section/DepartmentSection/DepartmentSectionStyle2';
import FeaturesSectionStyle2 from '../Section/FeaturesSection/FeaturesSectionStyle2';
import FunFactSection from '../Section/FunFactSection';
import TeamSection from '../Section/TeamSection';
import GallerySection from '../Section/GallerySection';
import AwardSectionStyle2 from '../Section/AwardSection/AwardSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
export const serviceData = [
  {
    title: 'Hemo - Dialysis',
    subTitle:
      'Blood tests, imaging studies, and other tests to diagnose health conditions',
    iconUrl: '/images/icons/hemo-dialysis.svg',
    href: '/departments/hemo-dialysis',
  },
  {
    title: 'In - Centre Dialysis',
    subTitle:
      'Physical therapy, occupational therapy, and other services to help patients recover from injuries',
    iconUrl: '/images/icons/in-centre-dialysis.svg',
    href: '/departments/in-centre-dialysis',
  },
  {
    title: 'Allied Servies',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/icons/allied-services.svg',
    href: '/departments/allied-services',
  },
  {
    title: 'Nephrology',
    subTitle:
      'Medication management, disease management, and other treatments to improve health outcomes',
    iconUrl: '/images/icons/nephrology.svg',
    href: '/departments/nephrology',
  }
];

const featureListData = [
  {
    title: 'Experienced Medical Professionals',
    subTitle:
      'Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.',
    iconUrl: 'images/icons/professional.svg',
  },
  {
    title: 'Comprehensive <br />Services',
    subTitle:
      'We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.',
    iconUrl: 'images/icons/comprehensive.svg',
  },
  {
    title: 'Patient-centered <br />Approach',
    subTitle:
      'We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.',
    iconUrl: 'images/icons/patient.svg',
  },
  {
    title: 'State-of-the-art <br />Facilities',
    subTitle:
      'Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.',
    iconUrl: 'images/icons/facilities.svg',
  },
];

const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

const teamData = [
  {
    imgUrl: 'images/about/doctor_1.png',
    name: 'Dr. James Lee, MD',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_2.png',
    name: 'Dr. John Smith, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'With expertise in treating acute illnesses and injuries in medicine physician',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_3.png',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];

const galleryData = [
  { imgUrl: '/images/about/portfolio_2_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_3_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_1_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_4_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_5_lg.jpeg' },
];
const awardData = [
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Malcolm Baldrige National Quality Award',
  },
  { iconUrl: '/images/icons/award.svg', title: 'HIMSS Davies Award' },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Healthgrades National’s Best Hospital',
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Joint Commission Gold Seal of Approval',
  },
];

export default function About() {
  pageTitle('About');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Welcome to <br />VitusCare Medlife"
        subTitle="We Make Quality Dialysis Accessible"
      />
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={serviceData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}
