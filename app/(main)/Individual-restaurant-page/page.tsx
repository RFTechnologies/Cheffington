import Map from "@/components/Map";
import React from "react";
import ReviewItem from "../individual-chef-page/_components/page";

const RestaurantProfile = () => {
  const features = [
    ["Outdoor seating", "Accepts reservations"],
    ["Accepts credit cards", "Delivery"],
    ["Kid friendly", "Wheelchair accessible"],
    ["Take-out", "Wifi"],
    ["Pet-friendly"],
  ];

  return (
    <div className="p-2">
      {/* Top Black Section */}
      <section className="bg-black min-h-[480px]">
        <div className="p-2">
          {/* Gallery + Header (Left) + Sidebar Card (Right) */}
          <div className="grid grid-cols-12 gap-6 pt-4">
            <div className="col-span-12 lg:col-span-8 space-y-10">
              {/* Image Gallery Grid */}
              <div className="flex flex-col gap-2 xl:flex-row w-full">
                <div className="bg-[#D9D9D9] w-[257px] h-[258px]"></div>
                <div className="bg-[#D9D9D9] w-[257px] h-[258px]"></div>
                <div className="bg-[#D9D9D9] w-[257px] h-[258px]"></div>
              </div>

              {/* Header Info */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-row gap-6 pl-3">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-[#D9D9D9] border-4 border-white flex items-center justify-center overflow-hidden"></div>
                  </div>
                  <div className="flex flex-row gap-6 items-center">
                    <div>
                      <h1 className="text-5xl text-white mt-2">
                        Name of Restaurant
                      </h1>
                      <p className="text-xl text-gray-300 font-light mt-1">
                        Type of restaurant
                      </p>
                    </div>
                    <button className="bg-[#FF8A00] text-black font-bold py-3 px-8 rounded-sm text-sm uppercase hover:bg-orange-500 transition-colors w-[171px] h-[48px] whitespace-nowrap flex items-center justify-center">
                      22 Chef Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="col-span-12 lg:col-span-4 lg:mb-[-120px]">
              <div className="bg-[#FF8400] w-[385px]">
                {/* Map Placeholder for Sidebar */}
                <div className="w-[385px] md:h-[447px]">
                              <Map lat={30.2672} lng={-97.7431} name="Chef Location" />
                            </div>

                {/* Address & Contact Info */}
                <div className="flex flex-col text-center">
                  <div className="px-6 py-5 border-b border-black/10">
                    <p className="font-extrabold text-sm text-black leading-tight">
                      123 Fake Street, Austin, TX 12345
                    </p>
                    <button className="text-[10px] font-black uppercase underline tracking-widest mt-1 hover:text-white transition-colors">
                      Get Directions
                    </button>
                  </div>
                  <div className="px-6 py-4 border-b border-black/10">
                    <p className="font-extrabold text-sm text-black">
                      (555) 555-5555
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="font-extrabold text-sm text-black">
                      www.website.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-12 gap-12 -mt-8 relative z-10">
        {/* Left Column: Actions & List */}
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-wrap gap-4 mb-16">
            {["WEBSITE", "ADD REVIEW", "VIEW MENU"].map((text) => (
              <div key={text} className="relative pt-4">
                <div className="left-1/2 ">
                 
                </div>
                <button className="bg-[#FF8A00] text-black font-bold py-4 px-10 rounded-lg  transition-all">
                  {text}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-[14px]">
            {features.map((row, idx) => (
              <React.Fragment key={idx}>
                {row.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-2xl leading-none font-bold mt-[-2px]">
                      •
                    </span>
                    <span className="text-lg font-bold text-gray-900 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <h1 className="subtitle mt-8">Chef Reviews for <span className="text-[#FF8400]">Resturant Name</span></h1>
           <div className="border-2 border-black rounded-3xl p-4 md:p-8 space-y-8 mt-6">

              {[1, 2, 3, 4, 5].map((i) => (
                <ReviewItem key={i} />
              ))}
 
            </div>
        </div>

        {/* Right Column: Sidebar Card */}
        <div className="col-span-12 lg:col-span-4 lg:pt-[140px]">
          {/* Lower Content Placeholder */}
          <div className="mt-8 bg-[#D9D9D9] h-80 rounded-sm">
             {/* REVIEWS */}
          </div>
          
        </div>
       
        
      </main>
    </div>
  );
};

export default RestaurantProfile;
