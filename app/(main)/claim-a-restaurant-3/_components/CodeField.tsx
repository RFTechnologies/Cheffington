'use client'
import Button from "@/components/Button";
import Link from "next/link";
import { redirect } from "next/navigation";

const CodeField = () => {
    const handleClick = () => {
        alert("Code submitted!");
        redirect("/claim-a-restaurant-4")
    }
    return (
        <div className="">
            <section>
                <label className="text-2xl font-bold mb-6 block tracking[-8%] leading-1">
                    Receive a code at @restaurantname.com
                </label>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
                    <input
                        type="email"
                        placeholder="Work Email"
                        className="input-field h-17.25 border! bg-[#EFEFEF]! placeholder:pl-4!"
                    />

                    <Button title="Send" />
                </div>
            </section>
            {/* Phone Verification */}
            <section className='my-18'>
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-6">
                    <label className="text-2xl font-bold block tracking[-8%] leading-1">
                        Receive a code at *restaurant phone number
                    </label>
                    {/* 
                    <button className="button button--primary  ">
                        SEND
                    </button> */}
                    <Button title="Send" className="" onClick={handleClick} />

                </div>
            </section>

            {/* Code Box */}
            <section className="bg-[#FF8000] md:py-14 md:px-9.75 p-6 rounded-[9px] shadow-sm">
                <label className="text-2xl font-bold mb-7 block tracking[-8%] leading-1">
                    Enter verification code
                </label>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
                    <input
                        type="text"
                        className="input-field md:h-[69px]  h-[69px] border! bg-[#EFEFEF]! placeholder:pl-4!"
                    />
                    <Button title="Claim" className="   bg-black! text-white!" onClick={handleClick} />

                </div>
            </section>
            <p className="text-[20px] mt-20 text-center tracking-[-8%] leading-normal">Need assistance? <span> <Link href={'#'} className="underline"> Contact us. </Link></span></p>
        </div>
    )
}

export default CodeField
