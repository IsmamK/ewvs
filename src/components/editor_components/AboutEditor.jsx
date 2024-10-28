import React, { useState } from 'react';
import About1 from '../../components/about_components/About1';
import About2 from '../../components/about_components/About2';
import Team from '../../components/about_components/Team';
import FAQ from '../../components/about_components/FAQ';

const AboutEditor = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState('About1');

  // Function to render the corresponding component based on the active tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'About1':
        return <About1 bgColor="white" textColor="white" />;
      case 'About2':
        return <About2 bgColor="white" textColor="white" />;
      case 'Team':
        return <Team bgColor="white" textColor="white" />;
      case 'FAQ':
        return <FAQ bgColor="white" textColor="white" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col p-8">
      {/* Tabs Section */}
      <div className="flex justify-around mb-5">
        {['About1', 'About2', 'Team', 'FAQ'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border-b-2 ${
              activeTab === tab
                ? 'border-blue-500 text-blue-500 font-semibold'
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('About', 'About ')}
          </button>
        ))}
      </div>

      <div className="flex">
        {/* Vertical Buttons Section */}
        <div className="flex flex-col gap-4 mr-10">
            <div className='1'>
          <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Page
          </button>
          </div>
          
        </div>

        {/* Mockup Browser Section */}
        <div className="mockup-browser bg-white border-8 border-white p-4 h-[700px] overflow-y-scroll flex-grow">
          <div className="mockup-browser-toolbar mb-4">
            <div className="input bg-gray-200 p-2 rounded">https://sample-website.com</div>
          </div>
          <div className="overflow-scroll">
            {/* Render the currently active component */}
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
