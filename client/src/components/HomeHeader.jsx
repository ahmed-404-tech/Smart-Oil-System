import React, { useState, useEffect } from 'react';

function HomeHeader() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className='bg-white drop-shadow-sm w-full h-18 flex justify-between items-center px-24'>
      <div className="text-lg">{date}</div>
      <h2 className='text-4xl font-bold'>Smart<span className='text-accent-200'>Oil</span></h2>
      <div className="text-lg">{time}</div>
    </header>
  );
}

export default HomeHeader;
