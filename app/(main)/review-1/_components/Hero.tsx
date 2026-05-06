import React from 'react'

const Hero = () => {
    return (
        <>
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="title mb-2">
                    Give Us the <span className="text-[#FF8400]">Dish</span>
                </h1>
                <h2 className="subtitle mt-2">Start your review</h2>
                <p className="body-subtitle md:my-8 my-6">
                    {` By continuing, you agree to Cheffington's`}{" "}
                    <span>  <a href="#" className="underline font-semibold inline">
                        terms
                    </a></span>
                    <span> and acknowledge our </span>{" "}
                    <span><a href="#" className="underline font-semibold inline">
                        Privacy Policy.
                    </a></span>

                </p>
            </div>

        </>
    )
}

export default Hero
