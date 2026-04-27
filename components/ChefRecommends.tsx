import React from 'react';

const ChefRecommends = () => {
  const recommendations = [
    {
      id: 1,
      name: "Chef Name",
      quote: "This is the best burrito in Los Angeles. Blah blah blah jdhdffjhjsjdfhdj djfhjsnfds df dsjhfdsjfhdsjf nhfhfhhfhf fhfhfsh.",
    },
    {
      id: 2,
      name: "Chef Name",
      quote: "This is the best burrito in Los Angeles. Blah blah blah jdhdffjhjsjdfhdj djfhjsnfds df dsjhfdsjfhdsjf nhfhfhhfhf fhfhfsh.",
    },
  ];

  return (
    <section className="bg-[var(--bg)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="title md:text-8xl font-black tracking-tighter mb-4 text-black">
          Chef Recommends
        </h2>
        <p className="subtitle md:text-4xl font-medium tracking-tight mb-16 text-black">
          No bad reviews. Only great food.
        </p>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#D9D9D9] p-8 md:p-12 min-h-[300px] flex flex-col justify-end text-left relative overflow-hidden"
            >
              <div className="flex items-start gap-6">
                {/* Profile Placeholder (Blue Circle) */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#56A8F5] flex-shrink-0" />
                
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm md:text-base font-bold leading-tight tracking-tight max-w-[280px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;