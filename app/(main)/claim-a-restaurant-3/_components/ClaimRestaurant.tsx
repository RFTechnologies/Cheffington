import CodeField from './CodeField'
import Hero from './Hero'


const ClaimRestaurantForm = () => {
    return (
        <div className="flex flex-col items-center py-10 md:py-16  font-sans text-black">
            <div className='page-width'>
                <Hero />
                <CodeField />
            </div>
        </div>
    )
}

export default ClaimRestaurantForm
