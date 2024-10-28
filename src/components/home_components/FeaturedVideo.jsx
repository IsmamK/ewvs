import React from 'react';

const FeaturedVideo = ({ divider,bgColor,textColor }) => {
  return (
    <div className='relative' style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Divider */}
      <img src={divider || ""} className='absolute top-0 w-full' />

     

<section className="bg-white ">
    <div className="p-20 mx-auto max-w-screen-xl  grid lg:grid-cols-2 gap-8 lg:gap-16 ">
        <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">Discover Our Vision </h1>
            <p className="mb-8 text-lg font-normal  lg:text-xl ">
            Learn more about our company, values, and mission through this short video. We are committed to delivering innovative solutions and fostering strong relationships with our clients                </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 bg-csc text-black  font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none bg-black text-csc rounded-lg border border-csc hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Learn more
                </a>  
            </div>
        </div>
        <div>
            <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</section>

    </div>
  );
};

export default FeaturedVideo;
