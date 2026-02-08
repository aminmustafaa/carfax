import React from 'react';
import image1 from '../images/autotrader.jpg';
import image2 from '../images/caa-logo.jpg';
import image3 from '../images/canadian.jpg';
import image4 from '../images/GM.jpg';
import image5 from '../images/HONDA.jpg';
import image6 from '../images/smSize.jpg';
import image7 from '../images/kijiji.jpg';
import image8 from '../images/lespac.jpg';
import image9 from '../images/nissan.jpg';
import image10 from '../images/mazda.jpg';
import image11 from '../images/amg.jpg';

// --- Component 2: Trusted By Section (Logos) ---
const TrustedBySection = () => {
  const logos = [
    { name: 'Audi', src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
    { name: 'AutoTrader', src: image1 },
    { name: 'Auto123', src: image6 },
    { name: 'BMW', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'CAA', src: image2 },
    { name: 'Canadian Tire', src: image3 },
    { name: 'GM', src: image4 },
    { name: 'Honda', src: image5 },
    { name: 'Hyundai', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
    { name: 'Kijiji', src: image7 },
    { name: 'LesPAC', src: image8 },
    { name: 'Mazda', src: image10 },
    { name: 'Nissan', src: image9 },
    { name: 'Mercedes-Benz', src: image11 },
    { name: 'Toyota', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg' },
    { name: 'Volkswagen', src: 'https://www.carfax.ca/content/dam/carfax/logos/partners/vw.png/jcr:content/renditions/smSize.webp' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-medium text-gray-700 mb-8 md:mb-12">
          Trusted by Canadians and businesses nationwide.
        </h2>

        {/* Grid Layout Changes:
            1. grid-cols-2: 2 logos per row on Mobile
            2. sm:grid-cols-4: 4 logos per row on Tablet
            3. lg:grid-cols-8: 8 logos per row on Desktop
            4. gap-8: Reduced gap on mobile to prevent overflow
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center w-full h-10 md:h-12">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                /* max-w-[100px] ensures massive logos don't dominate the grid */
                className="h-full w-auto max-w-[100px] md:max-w-full object-contain grayscale-0 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    // Removed p-14 which breaks mobile layout. 
    // The section handles its own padding.
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TrustedBySection />
    </div>
  );
}