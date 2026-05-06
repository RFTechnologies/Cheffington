
import React from "react";

import HeroSection from "./_components/HeroSection";
import RestaurantsButtons from "./_components/RestaurantsButtons";
import RestaurantsFeatures from "./_components/RestaurantsFeatures";
import ChefReviewForRestaurants from "./_components/ChefReviewForRestaurants";
import Adertising from "./_components/Adertising";

const RestaurantProfile = () => {

  return (
    <div className="">
      <HeroSection />
      <div className=" grid grid-cols-12 gap-12 -mt-8 relative z-10 page-width">
        <div className="col-span-12 lg:col-span-8">
          <RestaurantsButtons />
          <RestaurantsFeatures />
          <ChefReviewForRestaurants />
        </div>
        <Adertising />


      </div>
    </div>
  );
};

export default RestaurantProfile;
