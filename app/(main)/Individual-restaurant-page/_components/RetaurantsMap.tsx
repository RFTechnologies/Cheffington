import Map from "@/components/Map";

const RetaurantsMap = () => {
    return (
        <div className="col-span-12 lg:col-span-4 lg:-mb-30">
            <div className="bg-[#FF8400] w-96.25">
                {/* Map Placeholder for Sidebar */}
                <div className="w-96.25 md:h-111.75">
                    <Map lat={30.2672} lng={-97.7431} name="Chef Location" />
                </div>

                {/* Address & Contact Info */}
                <div className="flex flex-col text-center">
                    <div className="px-6 py-5 border-b border-black/10">
                        <p className="font-extrabold text-sm text-black leading-tight">
                            123 Fake Street, Austin, TX 12345
                        </p>
                        <button className="text-[10px] font-black uppercase underline tracking-widest mt-1 hover:text-white transition-colors">
                            Get Directions
                        </button>
                    </div>
                    <div className="px-6 py-4 border-b border-black/10">
                        <p className="font-extrabold text-sm text-black">
                            (555) 555-5555
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <p className="font-extrabold text-sm text-black">
                            www.website.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RetaurantsMap
