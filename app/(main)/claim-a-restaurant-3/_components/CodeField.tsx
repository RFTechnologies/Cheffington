'use client'
import { redirect } from "next/navigation";

const CodeField = () => {
    const handleClick = () => {
        alert("Code submitted!");
        redirect("/claim-a-restaurant-4")
    }
    return (
        <div className="">

            {/* Email Verification */}
            <section>
                <label className="text-2xl font-bold mb-6 block tracking[-8%] leading-1">
                    Receive a code at @restaurantname.com
                </label>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
                    <input
                        type="email"
                        placeholder="Work Email"
                        className="input-field min-h-22.25 md:h-22.25 border! bg-[#EFEFEF]! placeholder:pl-4!"
                    />

                    <button className="button button--primary md:px-16! md:h-22.25! ">
                        SEND
                    </button>
                </div>
            </section>

            {/* Phone Verification */}
            <section className='my-18'>
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-6">
                    <label className="text-2xl font-bold block tracking[-8%] leading-1">
                        Receive a code at *restaurant phone number
                    </label>

                    <button className="button button--primary md:px-16! md:h-22.25! ">
                        SEND
                    </button>
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
                        className="input-field min-h-22.25 md:h-22.25 border! bg-[#EFEFEF]! placeholder:pl-4!"
                    />

                    <button className="button button--primary md:px-16! md:h-22.25!  bg-black! text-white!" onClick={handleClick}>
                        Claim
                    </button>

                </div>
            </section>
        </div>
    )
}

export default CodeField
