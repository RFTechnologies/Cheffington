import React from 'react';

const BusinessHero = () => {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col items-center pt-12 px-6 font-sans">
      {/* Top Section / Header */}
      <div className="max-w-2xl w-full text-center">
        <div className="relative inline-block text-left">
          {/* The "+" Icon */}
          <span className="absolute -left-12 top-2 text-4xl font-light text-gray-800">
           
          </span>
          
          {/* Main Title */}
          <h1 className="title md:text-7xl font-extrabold leading-[0.9] tracking-tight text-black">
            Your <span className="text-[#FF8400]">Business</span><br />
            <span className="text-[#FF8400]">Hungry</span> Eyes
          </h1>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-400 mt-8 mb-6" />

        {/* Subtext */}
        <p className="subtitle md:text-3xl font-medium text-black leading-tight">
          Get <span className="text-[#FF8400]">More Leads</span> for Your Business<br />
          When You <span className="text-[#FF8400]">Advertise With Us</span>
        </p>
      </div>

     
    </main>
  );
};

export default BusinessHero;