'use client'

import { useState } from 'react'
import WelcomePopup from '@/components/Wellcompopup'

const JoinToCreateProfileForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    if (isSubmitted) return <WelcomePopup />

    return (
        <section className="md:pb-44 md:pt-20 py-10">
            <div className="page-width w-full">
                {/* Title */}
                <div className='mb-12'>
                    <h1 className="title text-center mb-1.5">
                        Be a <span className="text-[#FF8400]">Cheffington</span>
                    </h1>
                    <h2 className="md:text-[50px] text-4xl  text-center mb-8 tracking-[-8%]">
                        Create Your Profile
                    </h2>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="border-3 rounded-[9px]  border-black md:px-10! md:py-12! py-8! px-4! page-width-narrow"
                >
                    {/* Full Name */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Full Name</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="First" className="input-field" />
                            <input type="text" placeholder="Last" className="input-field" />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="mb-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 text-lg font-medium!">Email</label>
                                <input type="email" placeholder="" className="input-field" />
                            </div>
                            <div>
                                <label className="block mb-2 text-lg font-medium!">Phone</label>
                                <input type="tel" placeholder="" className="input-field" />
                            </div>
                        </div>
                    </div>

                    {/* Onsite Password & Verify */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Onsite Password</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="password" placeholder="Onsite Password" className="input-field" />
                            <input type="password" placeholder="Verify Password" className="input-field" />
                        </div>
                    </div>

                    {/* Current Restaurant & Website */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Current Restaurant</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Current Restaurant" className="input-field" />
                            <input type="url" placeholder="Website" className="input-field" />
                        </div>
                    </div>

                    {/* Job Title */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Job Title</label>
                        <input type="text" placeholder="Job Title" className="input-field" />
                    </div>

                    {/* Restaurant Address */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Restaurant Address</label>
                        <div className="space-y-4">
                            <input type="text" placeholder="Address Line 1" className="input-field" />
                            <input type="text" placeholder="Address Line 2" className="input-field" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="City" className="input-field" />
                                <input type="text" placeholder="State" className="input-field" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Zip Code" className="input-field" />
                                <select className="input-field">
                                    <option value="">Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Qualification Section */}
                    <div className="mb-10">
                        <p className="text-sm text-gray-600 mb-4">
                            To qualify as a Cheffington, you must enter a valid restaurant email (ex. may be submitted from any of our global locations).
                        </p>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Professional email</label>
                            <input type="email" placeholder="chef@restaurant.com" className="input-field" />
                        </div>
                        <p className="text-xs text-gray-500 mb-4">Phone optional — restaurant may take up to part of employment</p>

                        {/* File Upload with note */}
                        <label className="block border-2 border-dashed border-black/50 md:py-20 md:px-12 px-4 py-10 text-center cursor-pointer bg-transparent rounded-lg">
                            <input type="file" className="hidden" />
                            <p className="text-[20px] font-normal text-black/50 max-sm:text-[16px]">
                                Drag & Drop Files,{" "}
                                <span className="underline text-black/50">Choose Files to Upload</span>
                            </p>
                        </label>
                        <p className="text-xs text-gray-500 mt-2 text-center">Must be dated in the last six months</p>
                    </div>

                    {/* Declaration */}
                    <div className="mb-10">
                        <label className="flex items-center md:space-x-3 space-x-2 cursor-pointer group">
                            <input type="checkbox" className="md:min-w-10 md:min-h-10 min-w-5 min-h-5 border border-black bg-transparent rounded-none checked:border-black cursor-pointer accent-color" />
                            <span className="md:text-[20px] text-[16px] tracking-[-8%] font-medium">
                                Information submitted without above is consent to the best of my knowledge.
                            </span>
                        </label>
                    </div>

                    {/* Signature */}
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium">Signature</label>
                        <div className="border-2 border-black h-24 rounded-lg bg-gray-50" />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="mb-10">
                        <label className="flex items-center md:space-x-3 space-x-2 cursor-pointer group">
                            <input type="checkbox" className="md:min-w-10 md:min-h-10 min-w-5 min-h-5 border border-black bg-transparent rounded-none checked:border-black cursor-pointer accent-color" />
                            <span className="md:text-[20px] text-[16px] tracking-[-8%] font-medium underline">
                                I have read and accept the terms and agreement.
                            </span>
                        </label>
                    </div>

                    {/* Part Name */}
                    <div className="mb-8">
                        <label className="block mb-2 text-lg font-medium">Part Name</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="First" className="input-field" />
                            <input type="text" placeholder="Last" className="input-field" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:py-8 py-6 flex justify-center">
                        <button
                            type="submit"
                            className="button button--primary"
                        >
                            CREATE PROFILE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default JoinToCreateProfileForm