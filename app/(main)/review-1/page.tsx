import React from "react";

const ReviewForm = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] py-12 px-4 font-sans text-black">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="title md:text-6xl font-black tracking-tight mb-2">
          Give Us the <span className="text-[#FF8400]">Dish</span>
        </h1>
        <h2 className="subtitle font-bold mb-4">Start your review</h2>
        <p className="body-subtitle max-w-md mx-auto leading-tight">
          By continuing, you agree to Cheffington's{" "}
          <a href="#" className="underline font-semibold">
            terms
          </a>{" "}
          and acknowledge our{" "}
          <a href="#" className="underline font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </header>

      {/* Main Form Container */}
      <div className="max-w-2xl mx-auto border-3 border-black rounded-xl p-8 bg-transparent">
        <section>
          <h3 className="subtitle mb-1">Share your Chef's Notes...</h3>
          <p className="body-text mb-4">Don't forget to tell us about...</p>

          {/* Tag Suggestion Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {['your favorite dishes', 'the experience', 'the ambiance'].map((tag) => (
              <button 
                key={tag}
                className="bg-black text-white px-6 py-2 rounded-lg body-text shadow-md transition-transform hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Review Textarea */}
          <div className="relative group">
            <textarea
              className="w-full h-64 p-4 border border-gray-400 bg-transparent placeholder:text-gray-500 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Positive reviews only. Negative reviews will be removed and your account will be flagged.&#10;Must be a minimum of 85 characters."
            />
           
          </div>
        </section>

        {/* Upload Section */}
        <section className="mt-8">
          <p className="body-text mb-2">Upload images or video (optional)</p>
          <div className="border-3 border-dotted border-gray-400 h-32 flex items-center justify-center bg-transparent">
            <p className="body-text">
              Drag & Drop Files,{" "}
              <label className="underline cursor-pointer">
                Choose Files to Upload
                <input type="file" className="hidden" />
              </label>
            </p>
          </div>
        </section>

        {/* Submit Section */}
        <div className="mt-10 flex justify-center relative">
          <button className="bg-[#FF8400] text-black font-black py-4 px-20 rounded-lg transition-colors uppercase tracking-widest text-sm">
            Share
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
