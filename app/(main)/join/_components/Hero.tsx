import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center mb-6">
            <h1 className="title lg:mb-16 sm:mb-10 mb-8">
                Be a <span className="text-[#FF8400]">Chef’s Chef</span>
            </h1>

            <div className="relative flex justify-center items-start">
                <div className=" relative z-10">
                    <Image
                        src="/Join Hero Banner.png"
                        alt="Cartoon chicken wearing a chef hat, holding a knife and a blue T button"
                        width={800}
                        height={700}
                        priority
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
