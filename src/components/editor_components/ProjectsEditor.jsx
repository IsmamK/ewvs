import React, { useEffect, useState } from 'react';
import Projects from '../../pages/Projects'; // Adjust the import according to your folder structure

// Mock data for projects 
const mockProjects = [
  {
    id: 1,
    title: 'New trends in Tech',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',

  },
  {
    id: 2,

    title: 'Working with legacy stacks',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',

  },
  {
    id: 3,
    title: '10 best smartphones for devs',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600',
   
  },
  {
    id: 4,

    title: '8 High performance Notebooks',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600',
  
  },
];

const ProjectsEditor = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    setProjects(mockProjects)  // Call the api here


  },[])


  return (
    <div className='flex gap-20 items-center justify-between p-20'>
        
<div className='flex flex-col gap-10'>
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_4').showModal()}>Edit Existing Projects </button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg mb-4">Edit Existing Projects</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4 shadow-md bg-white">
          {/* Title Section */}
          <label className="font-bold mb-1">Title:</label>
          <input
            type="text"
            value={project.title}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, title: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="input mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Project Title"
          />
          
          {/* Description Section */}
          <label className="font-bold mb-1">Description:</label>
          <textarea
            value={project.description}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, description: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="textarea mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Project Description"
          />
          
          {/* Image URL Section */}
          <label className="font-bold mb-1">Image URL:</label>
          <input
            type="text"
            value={project.imageUrl}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, imageUrl: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="input mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Image URL"
          />
        </div>
      ))}
    </div>

    <div className="modal-action mt-4">
      <button className="btn" onClick={() => document.getElementById('my_modal_4').close()}>
        Close
      </button>
    </div>
  </div>
</dialog>

{/* Add new Project */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_4').showModal()}>Add New Projects</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg mb-4">Edit Existing Projects</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4 shadow-md bg-white">
          {/* Title Section */}
          <label className="font-bold mb-1">Title:</label>
          <input
            type="text"
            value={project.title}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, title: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="input mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Project Title"
          />
          
          {/* Description Section */}
          <label className="font-bold mb-1">Description:</label>
          <textarea
            value={project.description}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, description: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="textarea mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Project Description"
          />
          
          {/* Image URL Section */}
          <label className="font-bold mb-1">Image URL:</label>
          <input
            type="text"
            value={project.imageUrl}
            onChange={(e) => {
              const updatedProjects = projects.map((proj) =>
                proj.id === project.id ? { ...proj, imageUrl: e.target.value } : proj
              );
              setProjects(updatedProjects);
            }}
            className="input mb-3 border border-gray-300 rounded p-2 w-full"
            placeholder="Image URL"
          />
        </div>
      ))}
    </div>

    <div className="modal-action mt-4">
      <button className="btn" onClick={() => document.getElementById('my_modal_4').close()}>
        Close
      </button>
    </div>
  </div>
</dialog>


</div>


      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[700px] overflow-y-scroll">
        <div className=''>
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className='overflow-scroll'>
            {/* Pass the projects data to the Projects component */}
            <Projects />
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default ProjectsEditor;
