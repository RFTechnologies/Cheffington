

const Search = () => {
    return (
        <section className="pt-7 pb-44">
            <div className="page-width-narrow">
                <div className="w-full flex flex-col items-center">
                    <h2 className="title mb-7">
                        Explore <span className="text-[#FF8400]">Now</span>
                    </h2>
                </div>
                <div className="w-full bg-transparent border-2 border-black rounded-xl p-6 relative">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                        <div className="flex flex-col space-y-2">
                            <label className="text font-black uppercase">Cuisine</label>
                            <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text font-black uppercase">Location</label>
                            <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text font-black uppercase">Chef</label>
                            <input type="body-text" className="bg-transparent border-b border-black/30 focus:border-black outline-none pb-1" />
                        </div>
                        <div className="relative">
                            <button className="button button--primary">
                                {`Let's Eat`}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search
