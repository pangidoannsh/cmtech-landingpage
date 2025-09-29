import React from 'react'
import { useAppData } from '../App'
import { Icon } from '@iconify/react'

const Hero = () => {
    const { hero_heading, hero_subheading, hero_background, navbarHeight } = useAppData()
    return (
        <section className='h-[105vh] flex flex-col bg-black'>
            <div className="flex-shrink-0" style={{ height: navbarHeight + "px" }} />
            <div className="flex-1 bg-cover bg-top sm:bg-bottom relative" style={{ backgroundImage: `url("${hero_background}")` }}>
                <div className='flex flex-col gap-0 sm:gap-5 max-w-6xl w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-full px-4 sm:px-12'>
                    <h1 className='relative z-40 text-white hero-text font-bold text-4xl lg:text-5xl xl:text-6xl text-center min-h-32'>
                        {hero_heading}
                    </h1>
                    <p className='text-white text-center text-sm md:text-lg'>{hero_subheading}</p>
                </div>
            </div>
        </section >
    )
}

export default Hero