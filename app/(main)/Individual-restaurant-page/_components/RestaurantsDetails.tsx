import React from 'react'

const RestaurantsDetails = () => {
    return (
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
    )
}

export default RestaurantsDetails
