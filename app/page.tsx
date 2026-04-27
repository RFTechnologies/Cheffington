import React from 'react'
import CheffingtonHero from "../components/Hero"
import ChefRecommends from '@/components/ChefRecommends'
const page = () => {
  return (
    <div className='bg-[var(--bg)] w-full'>
     <CheffingtonHero />
     <ChefRecommends />
    </div>
  )
}

export default page