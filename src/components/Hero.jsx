import React from 'react'
import { useAppData } from '../App'
import { Icon } from '@iconify/react'

const Hero = () => {
    const { hero_heading, hero_subheading, hero_background, navbarHeight } = useAppData()
    return (
        <section className='h-[105vh] flex flex-col'>
            <div className="flex-shrink-0 bg-black" style={{ height: navbarHeight + "px" }} />
            <div className="flex-1 bg-cover bg-bottom relative" style={{ backgroundImage: `url("${hero_background}")` }}>
                <div className='flex flex-col gap-5 max-w-6xl w-max absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-full'>
                    <h1 className='relative z-40 text-white hero-text font-bold text-6xl text-center h-32'>
                        {hero_heading}
                    </h1>
                    <p className='text-white text-center text-lg'>{hero_subheading}</p>
                </div>
            </div>
        </section >
    )
}

export default Hero