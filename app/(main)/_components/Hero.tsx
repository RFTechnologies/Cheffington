import Image from "next/image";

const Hero = () => {
  return (
    <section >
      <div className="page-width ">
        <div className="flex items-center justify-center ">
          <Image
            src={"/image1.png"}
            alt="Chicken Chef"
            width={578}
            height={653}
          />
        </div>
        {/* Hero Text */}
        <div className="text-center mb-14">
          <h1 className="title mb-2">Eat Like a Chef.</h1>
          <p className="subtitle">
            Restaurant reviews by Chef’s, not your mom’s cat sitter.
          </p>
        </div>
        {/* Search Bar / Filter Section */}
        <div className=" bg-transparent border-2 border-black rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="flex flex-col space-y-2">
              <label className="body uppercase">Cuisine</label>
              <input
                type="text"
                className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="body uppercase">Location</label>
              <input
                type="text"
                className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="body uppercase">Chef</label>
              <input
                type="text"
                className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1"
              />
            </div>
            <button className="bg-[var(--primary)] hover:bg-[#FF8300] text-black font-black py-3 px-6 rounded-lg transition-all uppercase text-sm border">
              {`Let's Eat`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
