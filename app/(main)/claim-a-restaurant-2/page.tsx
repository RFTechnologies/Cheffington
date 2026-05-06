import HeroTitle from "@/components/HeroTitle";

const page = () => {
    return (
        <div>
            <HeroTitle subtitle="You may edit and/or add details below.">
                <span>
                    <span style={{ color: "#ff8400" }}>Log In</span> to Your Account
                </span>
            </HeroTitle>
        </div>
    );
};

export default page;