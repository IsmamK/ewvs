import React from 'react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  "https://i.pinimg.com/originals/77/cd/5a/77cd5aef056d75c2c9e17c581681ed0c.png",
  "https://e7.pngegg.com/pngimages/144/206/png-clipart-unilever-pureit-pure-it-logo-icons-logos-emojis-product-logos.png",
  "https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png",
  "https://i.pinimg.com/originals/6f/14/e1/6f14e17403cf65d3d5adeef024e85c1f.png",
  "https://seeklogo.com/images/P/pran-logo-17F049097A-seeklogo.com.png",
];

const OurClients = ({ divider,bgColor,textColor }) => {
  return (
    <div className="relative " style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Divider Image */}
      <img src={divider || ""} className="absolute top-0 z-100"  />
      
      <div className="overflow-hidden py-20">
        <div className="flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl  font-bold mb-6 mt-10">Our Affiliations</h2>
        </div>

        {/* Logo Slider Container */}
        <div className="w-3/4 mx-auto relative flex overflow-x-hidden mt-10 border-x-8 border-ewvs">
          <div className="flex animate-marquee whitespace-nowrap space-x-10">
            {/* Map over logos twice to duplicate */}
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
