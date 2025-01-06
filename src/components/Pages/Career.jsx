import React from 'react';
import CareerForm from '../AppointmentForm/CareerForm';
import Section from '../Section';
import BannerSectionStyle11 from '../Section/BannerSection/BannerSectionStyle11';

const Career = () => {
  return (
    <>
      {/* <Section
        topMd={185}
        topLg={140}
        topXl={180}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <BannerSectionStyle11
          bgUrl="images/about/career.png"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section> */}

      <Section
        topMd={185}
        topLg={140}
        topXl={180}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <div className="text-center mb-5">

          <h1>Join Our Team</h1>
          <p className="lead">We are always looking for talented individuals to join our team. Apply now!</p>
        </div>
        <CareerForm />
      </Section>
    </>
  );
};

export default Career;
