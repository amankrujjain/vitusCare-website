import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import BrandsSection from '../Section/BrandsSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection/FeaturesSectionStyle4';
// import TestimonialSection from '../Section/TestimonialSection';
import TestimonialSectionStyle2 from '../Section/TestimonialSection/TestimonialSectionStyle2'
// import BlogSection from '../Section/BlogSection';
// import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';
import AwardSection from '../Section/AwardSection';
import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';


// the subtitle to be set with in 50 words 
const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Best Amenities',
    subTitle:
      `Imported dialysis machines deliver precision care. High-quality dialyzers and RO TDS per WHO/ISN ensure optimal safety.`,
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Skilled Experts',
    subTitle:
      'Highly-skilled technicians recruited with stringent standards, trained under VitusCare protocols, high standards maintained via regular audits.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Superior Standards',
    subTitle: `Designed by top nephrologists, adhering to global standards. Every session audited to ensure reliable, adequate, and effective dialysis care.
`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Rigorous Hygiene',
    subTitle:
      'Strict infection control with regular sterilization. Dedicated machines, staff, and consumables for patients ensuring safety and hygiene.',
  },
];
const brandData = [
  { imgUrl: 'images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_8.png', imgAlt: 'Brand' },
];
const faqData = [
  {
    title: 'What services does VitusCare offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with VitusCare?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title:'Can I avail dialysis under government schemes such as Ayushman bharat, ECHS, CGHS?'
    ,
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my visit?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Can I receive dialysis at home?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title:'How long does each dialysis session take?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
  }
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const awardData = [
  {
    title: 'Changing Dialysis Care & Making It More Easily Available',
    subTitle:
      'This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: 'images/icons/award.svg',
    url: 'https://thebetterindia.com/373563/vitus-care-renal-care-dialysis-tier-2-cities-chronic-kidney-disease-prabhat-shrivastava/'
  },
  {
    title: 'Tomorrow Capital Invests In Kidney Start Up VitusCare',
    subTitle:
      'This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: 'images/icons/award.svg',
    url: 'https://timesofindia.indiatimes.com/business/india-business/tomorrow-capital-invests-in-kidney-start-up-vituscare/articleshow/109354003.cms'
  },
  {
    title: 'Top 3 ways to improve kidney health',
    subTitle:
      'This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: 'images/icons/award.svg',
    url: 'https://zeenews.india.com/hindi/health/how-to-managing-diabetes-to-prevent-kidney-disease-doctor-told-steps-for-a-healthier-lifestyle/2514635'
  },
  {
    title: ' Available, accessible, affordable: VitusCare is focusing on the 3 As of kidney care in Tier II and III India',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://yourstory.com/2022/09/accessible-affordable-dialysis-therapy-vituscare-kidney-care-india"
  },
  {
    title: 'ESRD rising at alarming rate, particularly among adults aged 25-55',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://health.economictimes.indiatimes.com/news/industry/esrd-rising-at-alarming-rate-particularly-among-adults-aged-25-55/113941095"
  },
  {
    title: 'VitusCare on track to achieve Rs 100 Cr ARR by 2026',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://yourstory.com/2024/12/vituscare-track-achieve-rs-100cr-arr-2026"
  },
  {
    title: 'Tomorrow Capital-Backed Dialysis Firm VitusCare On Road To Raise Fresh Funds',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://www.vccircle.com/tomorrowcapital-backed-dialysis-firm-vituscare-on-road-to-raise-fresh-funds"
  },
  ,
  {
    title: 'Health in 2024: The Top Trends That Shaped Preventive Care in India',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://www.news18.com/lifestyle/health-and-fitness-health-in-2024-the-top-trends-that-shaped-preventive-care-in-india-9159413.html"
  },
];
const departmentData = [
  {
    title: 'Home Dialysis',
    iconUrl: 'images/home_1/hemo-dialysis.svg',
    href: '#',
  },
  {
    title: 'In-centre Dialysis',
    iconUrl: 'images/home_1/in-centre-dialysis.svg',
    href: '#',
  },
  {
    title: 'Nephrologist Consultation',
    iconUrl: 'images/home_1/nephrology.svg',
    href: '#',
  },
 

];

const testimonialData = [
  {
    text: 'I recently had to bring my child to VitusCare for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to VitusCare for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to VitusCare for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to VitusCare for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
];

export default function Home() {
  pageTitle('Home');
  return (
    <>
      <Hero
        title="Your Partner in Health and Wellness"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img_1.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={[
          {
            title: 'Hotline',
            subTitle: '123-456-7890',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Ambulance',
            subTitle: '876-256-876',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: 'New York, US',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/tier-2-ladies-with-logo-entrance.png"
          spiningImgUrl="#"
          title="About Us"
          subTitle=""
          featureList={[
            {
              featureListTitle:
                '',
              featureListSubTitle:
                `
VitusCare is North India’s leading dialysis care provider, dedicated to making quality dialysis accessible across Tier 2, 3, and 4 cities. With over 50 centers and a focus on Accessibility, Affordability, and Awareness, we ensure every patient receives reliable, affordable, and informed care. Our state-of-the-art facilities, expert teams, and adherence to global protocols set us apart as a trusted partner in improving lives through exceptional dialysis services. 
`,
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Services"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="VitusCare In News" data={awardData} />
      </Section>
      {/* End Award Section */}
      {/* Start Testimonial */}
      {/* not using testimonial index file */}
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)`, marginTop: "35px" }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/GFR.png"
          title="Find About Your Kidney Health Now !"
          subTitle=""
          buttonUrl="/grf-calculator"
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section> */}
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Frequently Asked Questions"
          sectionTitleUp=""
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
