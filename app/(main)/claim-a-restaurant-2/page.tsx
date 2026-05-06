import ClaimRestaurantForm from "./_components/ClaimRestaurantForm";
import Hero from "./_components/Hero";



const page = () => {
    return (
        <div className="lg:py-24 md:py-14 py-12">
            <div className="page-width">
                <Hero />
                <ClaimRestaurantForm />
            </div>
        </div>
    );
};

export default page;