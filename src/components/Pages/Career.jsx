import React from 'react';
import CareerForm from '../AppointmentForm/CareerForm';
import Section from '../Section';

const Career = () => {
  return (
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
  );
};

export default Career;
