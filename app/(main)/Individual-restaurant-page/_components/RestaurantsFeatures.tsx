import React from 'react'

const RestaurantsFeatures = () => {
      const features = [
    ["Outdoor seating", "Accepts reservations"],
    ["Accepts credit cards", "Delivery"],
    ["Kid friendly", "Wheelchair accessible"],
    ["Take-out", "Wifi"],
    ["Pet-friendly"],
  ];
    return (
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
    )
}

export default RestaurantsFeatures
