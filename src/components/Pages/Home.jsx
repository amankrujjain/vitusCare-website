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
const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Excellence',
    subTitle:
      'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Integrity',
    subTitle: `We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Teamwork',
    subTitle:
      'We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.',
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
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
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
    title: 'Vituscare in Zee News Coverage',
    subTitle:
      'This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: 'images/icons/award.svg',
    url: 'https://zeenews.india.com/hindi/health/how-to-managing-diabetes-to-prevent-kidney-disease-doctor-told-steps-for-a-healthier-lifestyle/2514635'
  },
  {
    title: 'Changing Dialysis Care & Making It More Easily Available',
    subTitle:
      'This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: 'images/icons/award.svg',
    url: 'https://thebetterindia.com/373563/vitus-care-renal-care-dialysis-tier-2-cities-chronic-kidney-disease-prabhat-shrivastava/'
  },
  {
    title: 'Accessible Affordable Dialysis Therapy Vituscare',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
    url: "https://yourstory.com/2022/09/accessible-affordable-dialysis-therapy-vituscare-kidney-care-india"
  },
  {
    title: 'Joint Commission Gold Seal of Approval',
    subTitle:
      'This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: 'images/icons/award.svg',
    url: '#'
  },
];
const departmentData = [
  {
    title: 'Hemodialysis',
    iconUrl: 'images/home_1/hemo-dialysis.svg',
    href: '/departments/hemo-dialysis',
  },
  {
    title: 'In-centre Dialysis',
    iconUrl: 'images/home_1/in-centre-dialysis.svg',
    href: '/departments/in-centre-dialysis',
  },
  {
    title: 'Allied Services',
    iconUrl: 'images/home_1/allied-services.svg',
    href: '/departments/allied-services',
  },
  {
    title: 'Nephrology',
    iconUrl: 'images/home_1/nephrology.svg',
    href: '/departments/nephrology',
  },
  {
    title: 'Other Special Services',
    iconUrl: 'images/home_1/special-services.svg',
    href: '/departments/other-special-services',
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
          imgUrl="/images/home_1/about-test.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="Vituscare"
          featureList={[
            {
              featureListTitle:
                'VitusCare is a team of experienced medical professionals',
              featureListSubTitle:
                `About Us
VitusCare is North India’s leading dialysis care provider, dedicated to making **quality dialysis** accessible across Tier 2, 3, and 4 cities. With over 50 centers and a focus on **Accessibility, Affordability, and Awareness**, we ensure every patient receives reliable, affordable, and informed care. Our state-of-the-art facilities, expert teams, and adherence to global protocols set us apart as a trusted partner in improving lives through exceptional dialysis services. 
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
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="get your quick health check up with our GFR calculator!"
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
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
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
