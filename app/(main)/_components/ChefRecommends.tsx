const ChefRecommends = () => {
  const recommendations = [
    {
      id: 1,
      name: "Chef Name",
      quote: "This is the best burrito in Los Angeles. Blah blah blah jdhdf fjhj sjd fh dj dj f hj sn fds df dsjh fds jf hd sjf nhfh fh hfhf fh fhf sh.",
    },
    {
      id: 2,
      name: "Chef Name",
      quote: "This is the best burrito in Los Angeles. Blah blah blah jd hd ff jh jsj df hd j dj f h js nf ds df dsj hfd sjf hd sjf nhf hfh hfh f fh fhf sh.",
    },
  ];
  return (
    <section className="lg:my-32 my-24 max-sm:my-18">
      <div className="page-width">
        <h2 className="title text-center ">
          Chef Recommends
        </h2>
        <p className="subtitle md:text-4xl font-medium tracking-tight md:mb-12 mb-8 text-center">
          No bad reviews. Only great food.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-[#D9D9D9] p-4 md:p-8 min-h-[300px] flex flex-col justify-end text-left relative overflow-hidden"
            >
              <div className="flex items-start gap-6 max-sm:flex-wrap">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#56A8F5]" />

                <div className="flex flex-col justify-center basis-2/3 max-sm:basis-full">
                  <h4 className="text-xl  font-bold mb-2">
                    {item?.name}
                  </h4>
                  <p className="text-xl font-normal leading-tight tracking-tight">
                    &ldquo;{item?.quote}&rdquo;
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