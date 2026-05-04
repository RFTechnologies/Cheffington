import React from 'react';

const WelcomePopup = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center px-6 text-center animate-in fade-in duration-500">
      {/* Main Content */}
      <div className="">
        <h1 className="title font-black tracking-tighter text-black mb-8">
          Welcome to Cheffington
        </h1>

        <p className="subtitle md:text-4xl font-bold tracking-tight text-black mb-4">
          You will receive an email confirming your eligibility shortly.
        </p>

        <p className="text-sm md:text-base font-medium text-black/70 mb-16">
          No email? <a href="#" className="underline font-bold hover:text-black">Contact us.</a>
        </p>

        {/* Branding Footer */}
        <div className="flex flex-col items-center space-y-4 mt-12">
          <img
            src="/image1.png"
            alt="Cheffington Chicken"
            className="w-32 md:w-48 h-auto"
          />
          <h2 className="subtitle md:text-5xl font-black tracking-tighter text-black">
            Cheffington
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;