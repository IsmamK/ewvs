import React from 'react'
import Navbar from '../layout_components/Navbar'
import Footer from '../layout_components/Footer'

const LayoutsEditor = () => {
  return (

    <div className='flex gap-20 items-center justify-between p-20 '>
      {/* Buttons Section */}
      <div className='flex flex-col gap-10'>
        <button className="btn btn-primary px-20">Edit Navbar</button>
        <button className="btn btn-primary">Edit Footer</button>
  
      </div>

      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[700px]o overflow-scroll">
        <div className='bg-blue-800 '>
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className='overflow-scroll'>
            {/* Render child components via Outlet */}
            <div>
                <div className='overflow-x-scroll bg-blue-800'>
                    <Navbar />
            </div>
            <Footer bgColor={"black"} textColor={"white"}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LayoutsEditor
