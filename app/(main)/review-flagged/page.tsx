import Link from "next/link"

const Hero = () => {
    return (
        < div className="page-width">
            <div className="text-center mb-8 min-h-[70vh] flex items-center justify-center flex-col lg:gap-16 md:gap-14 gap-6">
                <h1 className="title ">
                    <span className="text-[#FF8400]"> No </span>Bad Vibes Dish
                </h1>
                <h2 className="subtitle">Your review has been flagged for possible negative language. Our team is assessing your review now. If everything looks okay, your review will be posted shortly.</h2>
                <p className="text-[20px] tracking-[-8%] leading-normal">Got questions?<span> <Link href={'#'} className="underline"> Contact us. </Link></span></p>
            </div>
        </div>
    )
}
export default Hero
