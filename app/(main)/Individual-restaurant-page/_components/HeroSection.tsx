import React from 'react'

import RestaurantsImages from './RestaurantsImages';
import RestaurantsDetails from './RestaurantsDetails';
import RetaurantsMap from './RetaurantsMap';

const HeroSection = () => {
    return (
        <div>
            <section className="bg-black min-h-120">
                <div className="page-width">
                    <div className="grid grid-cols-12 gap-6 pt-4">
                        <div className="col-span-12 lg:col-span-8 space-y-10">
                            <RestaurantsImages />
                            <RestaurantsDetails />
                        </div>
                        <RetaurantsMap />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection
