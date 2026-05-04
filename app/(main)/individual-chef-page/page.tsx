"use client";
import "leaflet/dist/leaflet.css";
import { MapPin, Phone, Globe, Info } from "lucide-react";
import Map from "@/components/Map";
import ReviewItem from "./_components/page";

export default function ChefProfile() {
  const restaurant = {
    name: "Name of Restaurant",
    type: "Type of restaurant",
    reviews: 22,
    address: "123 Fake Street, Austin, TX 12345",
    phone: "(555) 555-5555",
    website: "www.website.com",
    latitude: 30.2672,
    longitude: -97.7431,
    amenities: [
      { icon: "", text: "Outdoor seating" },
      { icon: "", text: "Accepts credit cards" },
      { icon: "", text: "Kid friendly" },
      { icon: "", text: "Take-out" },
      { icon: "", text: "Pet-friendly" },
      { icon: "", text: "Accepts reservations" },
      { icon: "", text: "Delivery" },
      { icon: "", text: "Wheelchair accessible" },
      { icon: "", text: "Wifi" },
    ],
  };
  return (
    <>
      <div className="bg-black text-white max-w-[1280px] h-[481px] mx-auto w-full">
        {/* Top Image Gallery */}
        <div className="grid grid-cols-3 gap-4 p-4 w-[786px] h-[257px]">
          <div className="bg-gray-300 aspect-square rounded"></div>
          <div className="bg-gray-300 aspect-square rounded"></div>
          <div className="bg-gray-300 aspect-square rounded"></div>
        </div>
        

        <div className="flex flex-col lg:flex-row gap-8 px-4 py-8">
          {/* Left Content */}
          
          <div className="flex-1 h-[480px]">
            {/* Restaurant Header */}
            <div className="flex gap-6 mb-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center"></div>
              </div>

              {/* Title and Reviews Button */}
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div>
                  <h1 className="text-4xl font-light mb-1">
                    {restaurant.name}
                  </h1>
                  <p className="text-gray-300">{restaurant.type}</p>
                </div>
                <button className="bg-orange-400 text-black font-bold px-6 py-2 w-fit hover:bg-orange-600 transition">
                  {restaurant.reviews} CHEF REVIEWS
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button className="bg-orange-400 text-black font-bold px-6 py-3 hover:bg-orange-600 transition flex items-center gap-2">
                <Info size={18} />
                WEBSITE
              </button>
              <button className="bg-orange-400 text-black font-bold px-6 py-3 hover:bg-orange-600 transition flex items-center gap-2">
                <Info size={18} />
                ADD REVIEW
              </button>
              <button className="bg-orange-400 text-black font-bold px-6 py-3 hover:bg-orange-600 transition flex items-center gap-2">
                <Info size={18} />
                VIEW MENU
              </button>
            </div>

            {/* Amenities Section */}
            <div className="p-12 rounded">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  {restaurant.amenities.slice(0, 5).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-black"
                    >
                      <span className="text-xl">{amenity.icon}</span>
                      <span className="font-semibold">{amenity.text}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {restaurant.amenities.slice(5).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-black"
                    >
                      <span className="text-xl">{amenity.icon}</span>
                      <span className="font-semibold">{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Map and Info */}
          <div className="w-[385px] flex flex-col gap-4">
            {/* Map */}
            <Map lat={30.2672} lng={-97.7431} name="My Restaurant" />

            {/* Info Boxes */}
            <div className="space-y-4">
              <div className="bg-orange-500 text-black p-4 rounded">
                <p className="font-bold text-center mb-2">
                  {restaurant.address}
                </p>
                <button className="w-full text-white font-bold hover:underline">
                  Get Directions
                </button>
              </div>

              <div className="bg-orange-500 text-black p-4 rounded">
                <p className="font-bold text-center flex items-center justify-center gap-2">
                  <Phone size={18} />
                  {restaurant.phone}
                </p>
              </div>

              <div className="bg-orange-500 text-black p-4 rounded">
                <p className="font-bold text-center flex items-center justify-center gap-2">
                  <Globe size={18} />
                  {restaurant.website}
                </p>
              </div>
            </div>
            <div className="bg-gray-300 h-40 rounded"></div>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
      </div>
       <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Chef Notes */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl mb-6">Chef Reviews for <span className="text-[#FF8400]">Resturant Name</span></h2>
            {/* Filters */}
            
            <div className="border-2 border-black rounded-3xl p-6 space-y-8 bg-transparent">
              {[1, 2, 3, 4, 5].map((i) => (
                <ReviewItem key={i} />
              ))}
            </div>
          </div>
        </main>
    </>
  );
}
