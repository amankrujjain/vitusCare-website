import React, { useState, useEffect } from 'react';

export default function FunFact({ number, title }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    // Check if the number needs to be animated (only animate if it's the last number, "Sessions Completed")
    if (title === 'Sessions Completed') {
      const targetNumber = 550000; // Target number for "Sessions Completed"
      const start = 534312; // Starting number
      const duration = 10000000; // Total duration in ms
      const stepTime = 30; // Interval between updates in ms
      const steps = Math.ceil(duration / stepTime);
      const increment = (targetNumber - start) / steps;

      let currentNumber = start;
      const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(interval);
        }
        setAnimatedNumber(Math.floor(currentNumber)); // Update state
      }, stepTime);

      return () => clearInterval(interval); // Cleanup on unmount
    } else {
      // If the title is not "Sessions Completed", set the number as is (with the "+" sign)
      setAnimatedNumber(0); // No animation for the first two
    }
  }, [number, title]);

  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_number cs_fs_72">
        {title === 'Sessions Completed' 
          ? formatIndianNumber(animatedNumber) 
          : number}
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_color">{title}</p>
    </div>
  );
}
