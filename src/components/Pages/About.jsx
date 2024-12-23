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
    title: 'Home - Dialysis',
    subTitle:
      'Blood tests, imaging studies, and other tests to diagnose health conditions',
    iconUrl: '/images/icons/home-dialysis.svg',
    href: '/departments/home-dialysis',
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
  { number: '50+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

const teamData = [
  {
    imgUrl: '/images/about/Mr.Saurabh.png',
    name: 'Dr. Saurabh, MD',
    designation: ' Founder and Chief Medical Officer',
    description:
      'With expertise in treating acute illnesses and injuries in medicine physician',
    social: [
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/Prabhat.png',
    name: 'Prabhat Shrivastava',
    designation: 'Founder and CEO',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
    ],
  },
  {
    imgUrl: '/images/about/Pankaj-Tandon.png',
    name: 'Pankaj Tandon',
    designation: ' Founder and CFO',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
    ],
  },
];

const galleryData = [
  { imgUrl: '/images/about/center791.png' },
  { imgUrl: '/images/about/center791-2.png' },
  { imgUrl: '/images/about/center.png' },
  { imgUrl: '/images/about/center-1611.png' },
  { imgUrl: '/images/about/center-1581.png' },
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
          imgUrl="images/about/Why choose us.png"
          data={featureListData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Expert Team"
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
      <Section className="cs_footer_margin_0" topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <BannerSectionStyle4 
          bgUrl="images/about/banner-multiple-people.png"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}
