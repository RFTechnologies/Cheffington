'use client'
import { useState } from 'react'

const AddListing = () => {
    const [value, setValue] = useState("");
    return (
        <main className="min-h-screen  py-12 px-4 flex justify-center">
            <div className="page-width w-full">
                <h1 className="title pt-20 pb-11">
                    Add an <span className="text-[#FF8400]">Establishment</span>
                </h1>

                <form className="border-2 rounded-3xl border-black px-10 py-12 ">
                    <div className="space-y-6">
                        <div>
                            <label className="">Restaurant Name*</label>
                            <input type="text" className="input-field transition-colors " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>

                                <input type="text" placeholder='Cuisine*' className="input-field" />
                            </div>
                            <div>

                                <input type="tel" placeholder='(555) 555-5555' className="input-field" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="">Website URL</label>
                                <input type="url" className="input-field" />
                            </div>
                            <div>
                                <label className="">Link to Menu</label>
                                <input type="url" className="input-field" />
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="mt-10">
                        <label >Restaurant Address*</label>
                        <div className="space-y-6 mt-8">
                            <input type="text" placeholder="Address Line 1" className="input-field" />
                            <input type="text" placeholder="Address Line 2" className="input-field" />

                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="City" className="input-field" />
                                <input type="text" placeholder="State" className="input-field" />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="Zip Code" className="input-field" />
                                <input type="text" placeholder="Country" className="input-field" />
                            </div>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="mt-10">
                        <label className="block">
                            Upload Logo or Featured Image (optional)
                        </label>

                        <label className="block mt-8 border-2 border-[#FFF1E1]   border-dashed   p-12 text-center rounded-[6px] cursor-pointer bg-transparent">

                            <input
                                type="file"
                                className="hidden"
                            />

                            <p className="text-xs text-gray-500">
                                Drag & Drop Files,{" "}
                                <span className="underline text-black font-semibold">
                                    Choose Files to Upload
                                </span>
                            </p>

                        </label>
                    </div>

                    {/* Checkboxes */}
                    <div className="mt-10">
                        <label className="">Check all that apply:</label>
                        <div className="grid grid-cols-2 gap-y-3 mt-8">
                            {[
                                "Takes Reservations", "Full Bar", "Pet Friendly", "Wine & Beer",
                                "Kid Friendly", "Wheelchair Accessible", "Outdoor Seating",
                                "Accepts Credit Cards", "Full Bar", "Take-Out", "Delivery", "Wifi"
                            ].map((item, idx) => (
                                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                    <input type="checkbox" className="w-10 h-10 border-2 border-[#D9D9D9] bg-transparent rounded-none checked:border-black cursor-pointer accent-color" />
                                    <span className="text-[20px] tracking-[-8%] font-medium">{item}</span>
                                </label>
                            ))}
                        </div>

                    </div>

                    {/* Chef's Notes Section */}
                    <div className="mt-10">
                        <h2 className="text-4xl font-bold mb-2 tracking-[-8%]"> {`${"Share your Chef's Notes..."}`}</h2>
                        <p className="text-[20px] mb-4 tracking-[-8%]"> {`${"Don't forget to tell us about..."}`}</p>

                        <div className="flex gap-2 mb-[18px]">
                            {['your favorite dishes', 'the experience', 'the ambiance'].map((tag) => (
                                <span key={tag} className="bg-black  py-3 rounded-[6px]  text-center  basis-1/3 text-[20px] font-medium text-[#FFF1E1]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="relative">
                            <textarea
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="border border-black h-96 p-4 input-field"
                            />

                            {!value && (
                                <span className="pointer-events-none absolute bottom-6 left-10 text-[20px] text-black/60">
                                    Positive reviews only. Must be a minimum of 85 characters.
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="button button--primary "
                        >
                            post review
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddListing
