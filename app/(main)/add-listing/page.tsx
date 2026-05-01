import React from 'react';

export default function AddEstablishmentForm() {
  return (
    <div className="min-h-screen bg-[var(--bg)] py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="subtitle mb-8 text-black">
          Add an <span className="text-[#FF8400]">Establishment</span>
        </h1>

        <form className="bg-[var(--bg)] border border-black p-8 ">
          {/* General Info Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold mb-1">Restaurant Name*</label>
              <input type="text" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-1">Cuisine*</label>
                <input type="text" className="w-full border border-gray-300 p-2 bg-gray-50 focus:ring-1 focus:ring-black outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">(555) 555-5555</label>
                <input type="tel" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold mb-1">Website URL</label>
                <input type="url" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Link to Menu</label>
                <input type="url" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-10">
            <h2 className="text-sm font-bold mb-4">Restaurant Address*</h2>
            <div className="space-y-6">
              <input type="text" placeholder="Address Line 1" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              <input type="text" placeholder="Address Line 2" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="City" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
                <input type="text" placeholder="State" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="Zip Code" className="w-full border-b border-gray-400 py-2 focus:border-black outline-none" />
                <input type="text" placeholder="Country" className="w-full border border-gray-300 p-2 bg-gray-50 focus:ring-1 focus:ring-black outline-none" />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="mt-10">
            <label className="block text-xs font-bold mb-2">Upload Logo or Featured Image (optional)</label>
            <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
              <p className="text-xs text-gray-500">
                Drag & Drop Files, <span className="underline cursor-pointer text-black font-semibold">Choose Files to Upload</span>
              </p>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-10">
            <p className="text-xs font-bold mb-4">Check all that apply:</p>
            <div className="grid grid-cols-2 gap-y-3">
              {[
                "Takes Reservations", "Full Bar", "Pet Friendly", "Wine & Beer", 
                "Kid Friendly", "Wheelchair Accessible", "Outdoor Seating", 
                "Accepts Credit Cards", "Full Bar", "Take-Out", "Delivery", "Wifi"
              ].map((item, idx) => (
                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded-none checked:bg-black" />
                  <span className="text-xs font-medium">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Chef's Notes Section */}
          <div className="mt-10">
            <h2 className="text-xl font-black mb-1">Share your Chef's Notes...</h2>
            <p className="text-xs mb-4">Don't forget to tell us about...</p>
            
            <div className="flex gap-2 mb-4">
              {['your favorite dishes', 'the experience', 'the ambiance'].map((tag) => (
                <span key={tag} className="bg-black text-white text-[10px] px-3 py-1 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative">
              <textarea 
                className="w-full border border-gray-400 h-48 p-4 focus:ring-1 focus:ring-black outline-none resize-none"
                placeholder=""
              ></textarea>
              <p className="absolute bottom-2 left-4 text-[10px] text-gray-400">
                Positive reviews only. Must be a minimum of 85 characters.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button 
              type="submit" 
              className="bg-[#FF8400] text-black font-black px-12 py-3 rounded-lg hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}