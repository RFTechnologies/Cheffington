import React from "react";
import Link from "next/link";
const ClaimPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center py-10 md:py-16 px-4 font-sans text-black">
      
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="title">
          How Would You Like to <br />
          <span className="text-[#FF8400]">Steak</span> Your Claim?
        </h1>

        <p className="body-text">
          By continuing, you agree to Cheffington&apos;s{" "}
          <span className="underline cursor-pointer">terms</span> and
          acknowledge our{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
          <br />
          Email@blah.com is about to claim Restaurant Name.
        </p>
      </header>

      <main className="w-full max-w-2xl space-y-8 md:space-y-10">
        
        {/* Email Verification */}
        <section>
          <label className="block text-sm md:text-base mb-2">
            Receive a code at @restaurantname.com
          </label>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
            <input
              type="email"
              placeholder="Work Email"
              className="w-full flex-1 p-4 bg-[#EDEDED] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 h-[55px] md:h-[60px]"
            />

            <button className="w-full md:w-auto bg-[#FF8400] text-black font-black px-6 md:px-10 h-[55px] md:h-[60px] rounded-lg hover:bg-orange-400 transition-colors tracking-widest text-sm">
              SEND
            </button>
          </div>
        </section>

        {/* Phone Verification */}
        <section>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-6">
            <label className="font-bold text-sm md:text-base">
              Receive a code at *restaurant phone number
            </label>

            <button className="w-full md:w-auto bg-[#FF8400] text-black font-black px-6 md:px-10 h-[55px] md:h-[60px] rounded-lg hover:bg-orange-400 transition-colors tracking-widest text-sm">
              SEND
            </button>
          </div>
        </section>

        {/* Code Box */}
        <section className="bg-[#FF8000] p-4 md:p-8 rounded-lg shadow-sm">
          <label className="block font-bold text-sm mb-2">
            Enter verification code
          </label>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
            <input
              type="text"
              className="w-full flex-1 p-4 bg-[#EDEDED] border border-gray-400 focus:outline-none h-[55px] md:h-[60px]"
            />
            <Link href="/claim-a-restaurant-4">
            <button className="w-full md:w-auto bg-black text-white font-bold px-6 md:px-10 h-[55px] md:h-[60px] hover:bg-zinc-900 transition-colors tracking-widest text-sm uppercase">
              Claim
            </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10 md:mt-12 text-xs text-center">
        <p>
          Need assistance?{" "}
          <span className="underline font-medium cursor-pointer">
            Contact us.
          </span>
        </p>
      </footer>
    </div>
  );
};

export default ClaimPage;