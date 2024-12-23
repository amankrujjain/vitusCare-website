import React, { useState, useEffect } from 'react';

export default function FunFact({ number, title }) {
  const [animatedNumber, setAnimatedNumber] = useState(498700);

  useEffect(() => {
    if (number === '5,00,000') {
      const start = 496700;
      const end = 500000;
      const duration = 1000000; // Total duration in ms
      const stepTime = 30; // Interval between updates in ms
      const steps = Math.ceil(duration / stepTime);
      const increment = (end - start) / steps;

      let currentNumber = start;
      const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= end) {
          currentNumber = end;
          clearInterval(interval);
        }
        setAnimatedNumber(Math.floor(currentNumber)); // Update state
      }, stepTime);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [number]);

  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_number cs_fs_72">
        {number === '5,00,000' ? formatIndianNumber(animatedNumber) : number}
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_color">{title}</p>
    </div>
  );
}
