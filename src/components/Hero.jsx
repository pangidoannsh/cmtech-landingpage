import React from 'react'
import { useAppData } from '../App'
import { Icon } from '@iconify/react'

const Hero = () => {
    const { hero_heading, hero_subheading } = useAppData()
    function _goToMore() {
        window.scrollTo({ top: window.innerHeight - 120, behavior: 'smooth' });
    }
    return (
        <section className='w-screen h-screen relative'>
            <div className="relative h-full z-10 flex justify-between items-center gap-12 container-max">
                <div className='max-w-[50%] flex flex-col gap-14'>
                    <h1 className='font-extrabold text-4xl 2xl:text-[56px] xl:leading-tight 2xl:leading-[75px]'>{hero_heading}</h1>
                    <p className='text-xl'>{hero_subheading}</p>
                    <div>
                        <button onClick={_goToMore} className='flex items-center font-extrabold gap-4 bg-primary-500 py-4 px-6 border border-black rounded-full
                        text-xl duration-200 hover:bg-primary-600 group'>
                            Discover More
                            <Icon icon="mingcute:arrow-right-line" className='text-2xl duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                <div className="flex-shrink-0 relative">
                    <div className='absolute -top-5 -left-5 bg-primary-500 border border-black w-full h-full -z-10' />
                    <div className="realtive w-max">
                        <img src="/assets/hero_image.webp" alt="hero_image" className='w-96 xl:w-[50vh] 2xl:w-[60vh] h-96 xl:h-[50vh] 2xl:h-[60vh] object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero