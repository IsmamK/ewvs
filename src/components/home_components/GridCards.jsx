import React, { useState } from 'react';

const GridCards = ({ divider ,bgColor,textColor}) => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
  ];

  const details = [
    { title: "Mountain View", description: "A beautiful view of the mountains during sunset." },
    { title: "Beachfront", description: "Relax by the calming waves and sandy beach." },
    { title: "City Lights", description: "An amazing view of the city skyline at night." },
    { title: "Forest Trail", description: "Hike through lush green forests and enjoy nature." },
    { title: "Desert Dunes", description: "Experience the serenity of the vast desert landscape." },
    { title: "Lake House", description: "Enjoy a peaceful stay by the lake with scenic views." },
    { title: "Snowy Peaks", description: "Feel the chill of snow-capped mountains in winter." },
    { title: "Countryside", description: "Escape to the quiet and tranquility of the countryside." }
  ];

  // State to track the index of the currently flipped card
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  // Function to handle flip on click for mobile
  const handleClick = (index) => {
    // Toggle the flip for the clicked card, unflip others
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  // Function to handle hover (mouse enter and leave) for desktop
  const handleHover = (index, isHovering) => {
    setFlippedCardIndex(isHovering ? index : null);
  };

  return (
    <div className='relative' style={{ backgroundColor: bgColor, color: textColor }}>
      <img src={divider || ""} className='absolute top-0 z-100'  />

      <div className='p-20'>
        <h1 className='text-center text-6xl md:text-7xl lg:text-8xl font-bold my-10'>Grid Cards</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flip-card ${flippedCardIndex === index ? 'flipped' : ''}`} // Add 'flipped' class only to the active card
              onClick={() => handleClick(index)} // Toggle flip on click for mobile
              onMouseEnter={() => handleHover(index, true)} // Flip on hover enter for desktop
              onMouseLeave={() => handleHover(index, false)} // Flip back on hover leave for desktop
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="w-full h-full rounded-lg" src={image} alt={`Card ${index}`} />
                </div>
                <div className='bg-black h-full flip-card-back p-5 text-csc flex flex-col justify-center'>
                  <h2 className='text-2xl font-bold mb-2'>{details[index].title}</h2>
                  <p>{details[index].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridCards;
