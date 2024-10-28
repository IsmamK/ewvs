import React from 'react'
import Contact from '../../pages/Contact'

const ContactEditor = () => {
  return (
    <div className='flex gap-20 items-center justify-between p-20'>
    {/* Buttons Section */}
    <div className='flex flex-col gap-10'>
      <button className="btn btn-primary px-20">Edit Contact 1</button>
      <button className="btn btn-primary">Edit Contact 2</button>
      
    </div>

    {/* Mockup Browser Section */}
    <div className="mockup-browser bg-white border-8 border-white p-2 h-[700px] overflow-y-scroll">
      <div className=''>
        <div className="mockup-browser-toolbar m-10">
          <div className="input">https://sample-website.com</div>
        </div>
        <div className='overflow-scroll'>
          {/* Render child components via Outlet */}
          <Contact  />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactEditor
