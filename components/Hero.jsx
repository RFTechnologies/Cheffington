import Image from "next/image";
import React from "react";

const CheffingtonHero = () => {
  return (
    <div className="bg-[var(--bg)] min-h-screen flex flex-col items-center px-4 font-sans text-black">
      <div className="mb-8">
        <Image
          src={"/image1.png"}
          alt="Chicken Chef"
          width={578}
          height={653}
        />
      </div>

      {/* Hero Text */}
      <div className="text-center mb-12">
        <h1 className="title md:text-7xl font-black tracking-tighter mb-2">
          Eat Like a Chef.
        </h1>
        <p className="subtitle">
          Restaurant reviews by Chef’s, not your mom’s cat sitter.
        </p>
      </div>

      {/* Search Bar / Filter Section */}
      <div className="w-full max-w-4xl bg-transparent border-2 border-black rounded-lg p-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="flex flex-col space-y-2">
            <label className="body uppercase">Cuisine</label>
            <input
              type="text"
              className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="body uppercase">Location</label>
            <input
              type="text"
              className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="body uppercase">Chef</label>
            <input
              type="text"
              className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
            />
          </div>
          <button className="bg-[var(--primary)] hover:bg-[#FF8300] text-black font-black py-3 px-6 rounded-lg transition-all uppercase text-sm border">
            {`Let's Eat`}
          </button>
        </div>
      </div>

      {/* The Chef's Kiss Section */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="title md:text-7xl font-black tracking-tighter mb-4">
          The Chef’s Kiss
        </h2>
        <p className="subtitle md:text-4xl font-bold mb-12 tracking-tight">
          Best place for <span className="text-[#FF8400]">Pakistani Food</span>{" "}
          in <span className="text-[#FF8400]">San Francisco</span>
        </p>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-square bg-[#D9D9D9] border border-black/10 flex items-center justify-center p-8 group cursor-pointer hover:bg-[#D1D1D1] transition-colors"
            >
              <span className="font-black text-sm uppercase tracking-widest text-center">
                Restaurant Name
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheffingtonHero;
