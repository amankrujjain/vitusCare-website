import React from 'react';
import CountUp from 'react-countup';

export default function FunFact({ number, title }) {
  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_number cs_fs_72">
        {number === '51,00,000' ? (
          <CountUp start={5000000} end={5100000} duration={2} enableScrollSpy />
        ) : (
          number
        )}
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_color">{title}</p>
    </div>
  );
}
