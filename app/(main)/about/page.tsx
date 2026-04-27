import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[var(--bg)] py-20 px-6 font-sans text-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* About Us Header */}
        <h1 className="title md:text-8xl font-black tracking-tighter mb-12">
          About Us
        </h1>

        {/* Text Content Area */}
        <div className="space-y-8 max-w-3xl mb-24">
          <p className="body-text md:text-2xl tracking-tight leading-tight">
            Tired of scanning restaurant reviews from your dad’s dentist’s brother who hates spicy food?
          </p>
          
          <p className="body-text md:text-2xl tracking-tight leading-tight">
            Imagine getting restaurant recommendations from people who actually know good food. 
            That’s right. We’re talking about real reviews from your favorite chefs.
          </p>

          <p className="body-text md:text-2xl tracking-tight leading-tight">
            Cheffington highlights the restaurants, delis, bars, taquerias, diners, bodegas, 
            and dives chefs love. We verify all our Cheffington members to ensure you get 
            the full flavor on where to eat no matter where you are.
          </p>

          <p className="body-text md:text-2xl tracking-tight pt-4">
            No bad reviews, only great food.
          </p>
        </div>

        {/* Explore Now Section */}
        <div className="w-full flex flex-col items-center">
          <h2 className="title md:text-7xl font-black tracking-tighter mb-8">
            Explore <span className="text-[#FF8400]">Now</span>
          </h2>

          {/* Search Bar Container */}
          <div className="w-full bg-transparent border-2 border-black rounded-xl p-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="flex flex-col space-y-2">
                <label className="text font-black uppercase">Cuisine</label>
                <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text font-black uppercase">Location</label>
                <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text font-black uppercase">Chef</label>
                <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
              </div>
              
              {/* Button with Blue T Icon */}
              <div className="relative">
                <button className="w-full bg-[#FF8400] text-black font-black py-3 px-4 rounded-lg border-2 border-black uppercase text-xs transition-transform active:translate-y-[1px]">
                  Let's Eat
                </button>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;