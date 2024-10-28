import React, { useEffect, useState } from 'react';

const About1 = ({ bgColor, textColor }) => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulating an API call to fetch data
  const fetchAboutData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Empowering Each Other to Succeed",
          description: "Every project we've undertaken has been a collaborative effort, where every person involved has left their mark.",
          image1: "https://pagedone.io/asset/uploads/1717741205.png",
          image2: "https://pagedone.io/asset/uploads/1717741215.png"
        });
      }, 1000); // Simulate a 1-second loading time
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAboutData();
      setAboutData(data);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show loading state
  }

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img className="rounded-xl object-cover" src={aboutData.image1} alt="about Us image" />
              </div>
              <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={aboutData.image2} alt="about Us image" />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    {aboutData.title}
                  </h2>
                  <p className="text-base font-normal leading-relaxed lg:text-start text-center">
                    {aboutData.description}
                  </p>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 text-ewvs bg-white transition-all duration-700 ease-in-out rounded-lg shadow-lg justify-center items-center flex">
                <span className="px-1.5  text-sm font-medium leading-6">Join Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
