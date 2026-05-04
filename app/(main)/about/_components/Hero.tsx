const Hero = () => {
    type AboutUsContent = {
        title: string;
        description: string;
    };
    const aboutus: AboutUsContent = {
        title: "About Us",
        description: `
         <p class="">
         Tired of scanning restaurant reviews from your dad’s dentist’s brother who hates spicy food?
         </p>
         <p class="">
         Imagine getting restaurant recommendations from people who actually know good food.
         That’s right. We’re talking about real reviews from your favorite chefs.
         </p>
         <p class="">
         Cheffington highlights the restaurants, delis, bars, taquerias, diners, bodegas,
         and dives chefs love.
         </p>
         <p class="">
         No bad reviews, only great food.
         </p>
         `,
    };
    return (
        <section className="lg:py-24 md:py-14 py-12">
            <div className="page-width-narrow">
                <div className="">
                    {aboutus?.title && (
                        <h1 className="title text-center ">
                            {aboutus?.title}
                        </h1>
                    )}
                    <div className="text-40 md:pt-16 flex flex-col md:gap-12 pt-6 gap-6" dangerouslySetInnerHTML={{ __html: aboutus?.description }} />
                </div>
            </div>
        </section>
    )
}

export default Hero
