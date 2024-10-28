import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../pages/Home';

const HomeEditor = ({ getDivider, availableShapes }) => {
  return (
    <div className='flex gap-20 items-center justify-between p-20'>
      {/* Buttons Section */}
      <div className='flex flex-col gap-10 font-bold text-center'>
  <button className="btn btn-primary">Carousel Component</button>
  <button className="btn btn-primary">Hero</button>
  <button className="btn btn-primary">Cards</button>
  <button className="btn btn-primary">Services</button>
  <button className="btn btn-primary">Statistics</button>
  <button className="btn btn-primary">Grid Cards</button>
  <button className="btn btn-primary">Why Us</button>
  <button className="btn btn-primary">Our Clients</button>
  <button className="btn btn-primary">News</button>
  <button className="btn btn-primary">Contact</button>
  <button className="btn btn-primary">Location</button>
  <button className="btn btn-primary">Featured Video</button>
</div>


      

      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[1000px] overflow-y-scroll">
        <div className=''>
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className='overflow-scroll'>
            {/* Render child components via Outlet */}
            <Home context={{ getDivider, availableShapes }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEditor;
