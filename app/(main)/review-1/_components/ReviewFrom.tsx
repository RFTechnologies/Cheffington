import React from 'react'

const ReviewFrom = () => {
    return (
        <div className=" border-3 border-black rounded-[9px] md:px-7 md:py-20 py-8 px-4">
            <div className="">
                <h2 className="md:text-4xl sm:text:3xl text-2xl font-bold mb-2 tracking-[-8%]"> {`${"Share your Chef's Notes..."}`}</h2>
                <p className="md:text-[20px] text-[18px] mb-4 tracking-[-8%]"> {`${"Don't forget to tell us about..."}`}</p>

                <div className="flex gap-2 mb-4.5 max-md:flex-wrap">
                    {['your favorite dishes', 'the experience', 'the ambiance'].map((tag) => (
                        <span key={tag} className="bg-black  py-3 px-3 rounded-[6px]  text-center  md:basis-1/3 md:text-[20px] sm:text-[16px] text-[14px] font-medium text-[#FFF1E1]">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="relative">
                    <textarea
                        placeholder="Positive reviews only. Negative reviews will be removed and your account will be flagged. Must be a minimum of 85 characters."

                        className="border border-black md:h-96 h-44 p-4 input-field"
                    />

                </div>
            </div>

            {/* File Upload */}
            <div className="mt-10 ">
                <label className="block">
                    Upload images or video (optional)
                </label>
                <label className="block mt-8 border border-dashed md:py-26 md:px-12 px-4 py-10 text-center cursor-pointer bg-transparent ">
                    <input
                        type="file"
                        className="hidden"
                    />
                    <p className="text-[20px] font-normal text-black/50 max-sm:text-[16px]">
                        Drag & Drop Files,{" "}
                        <span className="underline text-black/50 ">
                            Choose Files to Upload
                        </span>
                    </p>
                </label>
            </div>

            {/* Submit Section */}
            <div className="mt-10 flex justify-center relative">
                <button className="button button--primary">
                    Share
                </button>

            </div>
        </div>
    )
}

export default ReviewFrom
