'use client';
import React, { useState } from 'react';

// 1. Move interface outside so it's clean and reusable
interface RestaurantForm {
  restaurantName: string;
  cuisine: string;
  phone: string;
  websiteUrl: string;
  linkToMenu: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  description: string;
  features: string[]; 
}

const MasterpieceForm = () => {
  // 2. INITIALIZE STATE (This was the missing piece causing your error)
  const [formData, setFormData] = useState<RestaurantForm>({
    restaurantName: '',
    cuisine: '',
    phone: '',
    websiteUrl: '',
    linkToMenu: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    description: '',
    features: [] 
  });

  const amenities = [
    "Takes Reservations", "Pet Friendly", "Kid Friendly", 
    "Outdoor Seating", "Full Bar", "Delivery",
    "Wine & Beer", "Wheelchair Accessible",
    "Accepts Credit Cards", "Take-Out", "Wifi"
  ];

  // 3. Properly type your handlers instead of using 'any'
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (item: string) => {
    setFormData(prev => {
      const isSelected = prev.features.includes(item);
      return {
        ...prev,
        features: isSelected 
          ? prev.features.filter(f => f !== item) 
          : [...prev.features, item]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    alert("Check the console to see your data!");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center py-12 px-4  text-black">
      <header className="text-center mb-10">
        <h1 className="title md:text-6xl font-black tracking-tighter leading-none mb-2">
          Perfect Your <span className="text-[#FF8400]">Masterpiece</span>
        </h1>
        <p className="subtitle font-medium tracking-tight">You may edit and/or add details below.</p>
      </header>

      <div className="w-full max-w-3xl border border-black p-8 md:p-12 bg-transparent relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-1">
            <label className="body-text font-black uppercase">Restaurant Name</label>
            <input 
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              type="text" 
              className="w-full bg-transparent border-b border-black focus:outline-none py-1" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <input 
                name="cuisine"
                value={formData.cuisine}
                onChange={handleInputChange}
                type="text" 
                placeholder="Cuisine" 
                className="w-full bg-transparent border border-black p-3 focus:outline-none" 
              />
            </div>
            <div className="space-y-1">
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="text" 
                placeholder="(555) 555-5555" 
                className="w-full bg-transparent border-b border-black py-1 focus:outline-none mt-4" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">Website URL</label>
              <input name="websiteUrl" value={formData.websiteUrl} onChange={handleInputChange} type="text" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">Link to Menu</label>
              <input name="linkToMenu" value={formData.linkToMenu} onChange={handleInputChange} type="text" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">Restaurant Address</label>
              <input name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} type="text" placeholder="Address Line 1" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
            <input name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} type="text" placeholder="Address Line 2" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">City</label>
              <input name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">State</label>
              <input name="state" value={formData.state} onChange={handleInputChange} type="text" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase">Zip Code</label>
              <input name="zipCode" value={formData.zipCode} onChange={handleInputChange} type="text" className="w-full bg-transparent border-b border-black py-1 focus:outline-none" />
            </div>
            <div className="pt-4">
              <input name="country" value={formData.country} onChange={handleInputChange} type="text" placeholder="Country" className="w-full bg-transparent border border-black p-3 focus:outline-none" />
            </div>
          </div>

          <div className="pt-4">
            <label className="text-[10px] font-black uppercase block mb-4">Check all that apply:</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
              {amenities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => handleCheckboxChange(item)}
                >
                  <div className={`w-6 h-6 border border-black transition-colors flex items-center justify-center ${formData.features.includes(item) ? 'bg-black' : 'bg-white'}`}>
                    {formData.features.includes(item) && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-[11px] font-bold uppercase group-hover:text-gray-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="text-[10px] font-black uppercase">Write Brief Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-black h-32 focus:outline-none p-2" 
            />
          </div>

          <div className="flex justify-center pt-6">
            <button 
              type="submit"
              className="bg-[#FF8400] text-black font-black px-16 py-4 rounded-lg transition-all tracking-tighter uppercase"
            >
              Complete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MasterpieceForm;

