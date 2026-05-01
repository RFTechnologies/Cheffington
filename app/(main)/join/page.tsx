
import Hero from "./_components/Hero";
import HowItWork from "./_components/HowItWork";


const BeAChefsChefPage = () => {

  return (

    <div className="my-16 md:my-[71px]">
      <div className="page-width">
        <Hero />
        <HowItWork />
      </div>
      {/* <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-[#FF7F00]/5 rounded-full blur-[160px] pointer-events-none -z-10"></div> */}
    </div>
  );
};

export default BeAChefsChefPage;
