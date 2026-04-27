import React from "react";
import Image from "next/image";
import Link from "next/link";

// Assuming you have the chicken illustration saved in your public folder.

const BeAChefsChefPage = () => {
  const steps = [
    {
      number: 1,
      text: "Create a profile.",
      link: true, // This step is styled as a link
    },
    {
      number: 2,
      text: "Enter your professional email or upload a recent restaurant pay stub",
      link: false,
    },
    {
      number: 3,
      text: "Receive verification",
      link: false,
    },
    {
      number: 4,
      text: "Share your love for your favorite restaurants",
      link: false,
    },
  ];

  return (
    // Main Container - Set the specific off-white background
    <div className="bg-[var(--bg)] min-h-screen text-[#1A1A1A] font-sans selection:bg-orange-200">
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Section 1: Hero & Illustration */}
        <section className="relative flex flex-col items-center mb-20 md:mb-32">
          {/* Main Headline */}
          <h1 className="title md:text-7xl font-black tracking-tighter mb-16 text-center leading-tight">
            Be a <span className="text-[#FF8400]">Chef’s Chef</span>
          </h1>

          {/* Illustration Container - Relative for positioning thought bubbles */}
          <div className="relative w-full max-w-lg md:max-w-2xl flex justify-center items-start">
            {/* The Main Chicken Illustration */}
            <div className="w-[300px] md:w-[450px] relative z-10">
              <Image
                src="/image-2.png"
                alt="Cartoon chicken wearing a chef hat, holding a knife and a blue T button"
                width={450}
                height={450}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 2: How It Works */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Underlined Subheader */}
          <div className="inline-block relative mb-6">
            <h2 className="body-subtitle md:text-3xl tracking-tight">
              How it Works
            </h2>
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[120%] h-[2px] bg-black/10"></div>
          </div>

          {/* Description Paragraph */}
          <p className="body-text md:text-xl leading-relaxed tracking-tight text-black/80 mb-16 md:mb-20">
            Cheffington is a place for chefs to share their love of their
            favorite eateries across the globe. No bad reviews, only great food.
          </p>

          {/* The Stepper (Numbered List) */}
          <div className="body-text flex flex-col items-center space-y-12 md:space-y-16 w-full max-w-2xl mb-10 md:mb-24">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center group"
              >
                {/* Step Number (Oval) */}
                <div className="border border-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <span className="text-base font-bold text-black/60">
                    {step.number}
                  </span>
                </div>

                {/* Step Text (Optional Link Styling) */}
                {step.link ? (
                  <a
                    href="#"
                    className="body-text md:text-2xl tracking-tight text-black group-hover:text-[#FF8400] transition-colors underline decoration-black/10 decoration-2 underline-offset-4 group-hover:decoration-[#FF8400]"
                  >
                    {step.text}
                  </a>
                ) : (
                  <p className="body-text md:text-2xl tracking-tight text-black leading-snug px-4 md:px-0">
                    {step.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="relative inline-block mt-8 md:mt-12 group">
            <Link href="join-2-create-profile">
              <button className="bg-[#FF8400] text-black font-extrabold px-12 py-5 rounded-lg text-sm md:text-base uppercase tracking-wider shadow-lg hover:bg-[#FF8400] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-in-out">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Decorative Blur Effect (optional, adding to the minimal feel) */}
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-[#FF7F00]/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default BeAChefsChefPage;
