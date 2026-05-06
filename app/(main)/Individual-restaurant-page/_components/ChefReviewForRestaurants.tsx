import React from 'react'
import ReviewItem from '../../individual-chef-page/_components/page'

const ChefReviewForRestaurants = () => {
    return (
        <div>
            <h1 className="subtitle mt-8">Chef Reviews for <span className="text-[#FF8400]">Resturant Name</span></h1>
            <div className="border-2 border-black rounded-3xl p-4 md:p-8 space-y-8 mt-6">

                {[1, 2, 3, 4, 5].map((i) => (
                    <ReviewItem key={i} />
                ))}

            </div>
        </div>
    )
}

export default ChefReviewForRestaurants
