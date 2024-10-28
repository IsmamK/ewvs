import React from 'react';

// Mock data
const mockData = {
 
  title: "The Tale of Our Achievement Story",
  description: "Our achievement story is a testament to teamwork and perseverance. Together, we've overcome challenges, celebrated victories, and created a narrative of progress and success.",
  stats: [
    { title: "33+ Years", description: "Influencing Digital Landscapes Together" },
    { title: "125+ Projects", description: "Excellence Achieved Through Success" },
    { title: "26+ Awards", description: "Our Dedication to Innovation Wins Understanding" },
    { title: "99% Happy Clients", description: "Mirrors our Focus on Client Satisfaction." },
  ],
  buttonLabel: "Contact Us",
  imageUrl: "https://pagedone.io/asset/uploads/1717742431.png"
};

const About2 = ({bgColor, textColor}) => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="font-normal leading-relaxed">About Us</h6>
                <div className="w-full  flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="font-bold text-5xl font-manrope leading-normal lg:text-start text-center">
                    {mockData.title}
                  </h2>
                  <p className="font-normal leading-relaxed lg:text-start text-center">
                    {mockData.description}
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {mockData.stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="w-full h-full p-3.5 rounded-xl border bg-white text-ewvs transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">{stat.title}</h4>
                      <p className="font-normal leading-relaxed">{stat.description}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {mockData.stats.slice(2).map((stat, index) => (
                    <div key={index} className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-white text-ewvs transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-2xl font-bold font-manrope leading-9">{stat.title}</h4>
                      <p className="text-base font-normal leading-relaxed">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 text-ewvs bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-md font-bold leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                {mockData.buttonLabel}
              </span>
      
            </button>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-white rounded-3xl  relative">
              <img className="sm:mt-5 sm:border-2 border-ewvs sm:ml-5 w-full h-full rounded-3xl object-cover" src={mockData.imageUrl} alt="about Us image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
