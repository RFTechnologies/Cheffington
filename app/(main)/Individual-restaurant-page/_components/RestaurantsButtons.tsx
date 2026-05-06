import React from 'react'

const RestaurantsButtons = () => {
    return (
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
    )
}

export default RestaurantsButtons
