const RestaurantsList = () => {
    return (
        <section className="lg:my-32 my-24 max-sm:my-18">
            <div className=" text-center page-width">
                <h2 className="title md:text-7xl font-black tracking-tighter mb-4">
                    The Chef’s Kiss
                </h2>
                <p className="subtitle md:text-4xl font-bold md:mb-12 mb-8 tracking-tight">
                    Best place for <span className="text-[#FF8400]">Pakistani Food</span>{" "}
                    in <span className="text-[#FF8400]">San Francisco</span>
                </p>

                {/* Restaurant Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="aspect-square bg-[#D9D9D9] border border-black/10 flex items-center justify-center p-8 group cursor-pointer hover:bg-[#D1D1D1] transition-colors"
                        >
                            <span className="font-black text-sm uppercase tracking-widest text-center">
                                Restaurant Name
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RestaurantsList
