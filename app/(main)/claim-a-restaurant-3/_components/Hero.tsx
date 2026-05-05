

const Hero = () => {
    return (
        <div className="text-center md:mb-16 mb-8">
            <h1 className="title md:mb-8 mb-4">
                How Would You Like to <br />
                <span className="text-[#FF8400]">Steak</span> Your Claim?
            </h1>

            <p className="body-text">
                By continuing, you agree to Cheffington&apos;s{" "}
                <a href="/terms" className="underline cursor-pointer">terms</a> and
                acknowledge our{" "}
                <a href="/privacy" className="underline cursor-pointer">Privacy Policy</a>
                <br />
                Email@blah.com is about to claim Restaurant Name.
            </p>
        </div>

    )
}

export default Hero
