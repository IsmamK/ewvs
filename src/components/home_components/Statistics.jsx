import React from 'react';

const Statistics = ({ divider, bgColor, textColor }) => {
  // Array of statistics data
  const statsData = [
    { count: '500+', label: 'Secure Installations' },
    { count: '1000+', label: 'Cleaning Projects' },
    { count: '800+', label: 'Pest Control Jobs' },
    { count: '1200+', label: 'Happy Households' },
  ];

  return (
    <div className='relative py-16' style={{ backgroundColor: bgColor, color: textColor }}>
      <img src={divider || ""} className='absolute top-0 z-10' alt='' />

      <div className='container mx-auto px-4 p-10'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center mb-10'>
          Numbers That Amaze
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {/* Dynamically mapped statistics */}
          {statsData.map((stat, index) => (
            <div key={index} className='p-6 rounded-lg shadow-lg bg-white text-ewvs'>
              <h2 className='text-5xl font-bold mb-4'>{stat.count}</h2>
              <p className='text-lg'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
