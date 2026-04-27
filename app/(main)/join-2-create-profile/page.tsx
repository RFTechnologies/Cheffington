'use client'
import React from 'react';
import WelcomePopup from '@/components/Wellcompopup';
import { useState } from 'react';

const CreateProfileForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Logic to send data to your API/Backend
    // const response = await fetch('/api/register', { ... });

    // 2. If successful, trigger the "popup" view
    setIsSubmitted(true);
  };

  // If submitted, show the welcome screen instead of the form
  if (isSubmitted) {
    return <WelcomePopup />;
  }

  return (
    <div className="bg-[var(--bg)] min-h-screen py-16 px-4 font-sans text-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="title md:text-7xl font-black tracking-tighter mb-2">
            Be a <span className="text-[#FF8400]">Cheffington</span>
          </h1>
          <p className="subtitle md:text-3xl font-bold tracking-tight">Create Your Profile</p>
        </div>

        {/* Form Card */}
        <div className="bg-transparent border border-black rounded-xl p-8 md:p-12 ">
          
          {/* ❌ ONLY ONE FORM (FIXED NESTING ISSUE) */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Full Name Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-sm font-bold">Full Name</label>
                <input type="text" placeholder="First" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none placeholder:text-gray-400" />
              </div>
              <div className="space-y-1 pt-6">
                <input type="text" placeholder="Last" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none placeholder:text-gray-400" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-sm font-bold">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold">Phone</label>
                <input type="tel" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
            </div>

            {/* Password Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-sm font-bold">Create Password</label>
                <input type="password" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold">Verify Password</label>
                <input type="password" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-sm font-bold">Current Restaurant</label>
                <input type="text" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold">Website</label>
                <input type="url" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
            </div>

            {/* Job Title */}
            <div className="space-y-1">
              <label className="text-sm font-bold">Job Title</label>
              <input type="text" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
            </div>

            {/* Address Section */}
            <div className="space-y-6">
              <label className="text-sm font-bold block">Restaurant Address</label>
              <input type="text" placeholder="Address Line 1" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              <input type="text" placeholder="Address Line 2" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              
              <div className="grid grid-cols-2 gap-8">
                <input type="text" placeholder="City" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
                <input type="text" placeholder="State" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <input type="text" placeholder="Zip Code" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
                <select className="w-full bg-transparent border border-black/40 p-2 focus:border-black outline-none text-sm">
                  <option>Select Country</option>
                </select>
              </div>
            </div>

            {/* Verification Section */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              <p className="text-[10px] uppercase font-bold leading-tight">
                To qualify as a Cheffington, you must enter a valid restaurant email (ex: mary@restaurantname.com) or upload a restaurant pay stub.
              </p>
              <input type="email" placeholder="Professional email" className="w-full bg-white/50 border border-black/40 p-3 outline-none focus:border-black" />
              
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold">Please upload restaurant pay stub as proof of employment</p>
                <div className="border-2 border-dashed border-black/20 rounded-lg p-8 text-center text-xs text-gray-500 bg-white/30">
                  Drag & Drop Files, <span className="underline cursor-pointer">Choose Files to Upload</span>
                </div>
                <p className="text-[10px] italic">*Must be dated in the last six months</p>
              </div>
            </div>

            {/* Declaration & Signature */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-orange-400" />
                <label className="text-xs font-bold uppercase">All information submitted above is correct to the best of my knowledge</label>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Signature</label>
                <div className="w-full h-32 bg-white/50 border border-black/40 rounded-sm"></div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-orange-400" />
                <label className="text-xs font-bold uppercase underline">I have read and accept the terms and agreement</label>
              </div>
            </div>

            {/* Print Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-sm font-bold">Print Name</label>
                <input type="text" placeholder="First" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
              <div className="space-y-1 pt-6">
                <input type="text" placeholder="Last" className="w-full bg-transparent border-b border-black/40 py-2 focus:border-black outline-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8 relative">
              <button type="submit" className="bg-[#FF8400] text-black font-black py-4 px-12 rounded-lg uppercase tracking-widest hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                Create Profile
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfileForm;