import React from 'react';

const Statistics = ({ divider ,bgColor,textColor}) => {
  return (
    <div className='relative  py-16' style={{ backgroundColor: bgColor, color: textColor }}>
      <img src={divider || ""} className='absolute top-0 z-100 over' />

      <div className='container mx-auto px-4 p-10'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center mb-10'>
          Numbers That Amaze
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {/* Security Solutions */}
          <div className='p-6 bg-gray-800 text-csc rounded-lg shadow-lg'>
            <h2 className='text-5xl font-bold mb-4'>500+</h2>
            <p className='text-lg'>Secure Installations</p>
          </div>

          {/* Professional Cleaning */}
          <div className='p-6 bg-gray-800 text-csc  rounded-lg shadow-lg'>
            <h2 className='text-5xl font-bold mb-4'>1000+</h2>
            <p className='text-lg'>Cleaning Projects</p>
          </div>

          {/* Pest Control */}
          <div className='p-6 bg-gray-800 text-csc  rounded-lg shadow-lg'>
            <h2 className='text-5xl font-bold mb-4'>800+</h2>
            <p className='text-lg'>Pest Control Jobs</p>
          </div>

          {/* Housekeeping Services */}
          <div className='p-6 bg-gray-800 text-csc  rounded-lg shadow-lg'>
            <h2 className='text-5xl font-bold mb-4'>1200+</h2>
            <p className='text-lg'>Happy Households</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Statistics;
