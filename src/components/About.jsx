import { useState } from 'react'
import { useAppData } from '../App'

const About = () => {
    const { about_us, our_vision, management_paragraph, structures, head_sctructures, values, windowWidth } = useAppData()
    const [isValues, setIsValues] = useState(false)
    return (
        <section className='flex flex-col gap-12 md:gap-24 items-center'>
            <h1 className='text-center w-full header-about py-8 uppercase font-semibold text-2xl text-white'>PT. CAHAYA MITRATAMA</h1>
            <div className="flex flex-col gap-16 xl:gap-36 w-full">
                <div className="relative w-full">
                    <div className="container-max mx-auto">
                        <div className="flex flex-col gap-2 w-full md:ps-[33%]">
                            <div className="flex items-center gap-3">
                                <div className="bg-neutral-500 h-6 w-0.5" />
                                About Us
                            </div>
                            <h2>Who we are</h2>
                            <p className='relative z-10 text-justify text-xs md:text-base text-neutral-700'>{about_us}</p>
                        </div>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
                        <div className="relative">
                            <img src='/assets/about_image.png' className='h-60 md:h-64 lg:h-80 xl:h-[400px]' />
                            <div className="absolute top-0 right-0 translate-y-1/4 w-24 h-24 bg-transparent border-[16px] border-accent rounded-full" />
                        </div>
                    </div>
                    <div className="absolute w-16 h-16 top-4 right-0 translate-x-1/4 bg-accent rounded-full" />
                </div>
                <div className='relative w-full'>
                    <div className="container-max mx-auto flex md:flex-row flex-col items-center xl:gap-8 2xl:gap-12">
                        <div className="flex-1 flex flex-col gap-2 w-full">
                            <div className="flex flex-col gap-1 md:gap-3">
                                <h2>Management</h2>
                                <div className="w-14 h-1 bg-accent" />
                            </div>
                            <p className='relative z-10 text-justify text-xs md:text-base text-neutral-700'>{management_paragraph}</p>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <div className="flex-shrink-0 xl:block hidden">
                                    <img src="/assets/management_icon.png" className='xl:h-40 2xl:h-56' />
                                </div>
                                <div className="hidden md:flex flex-col gap-3 justify-between w-full">
                                    {head_sctructures.map((struct, i) => (
                                        <div key={i} className='flex items-center text-white gap-4 2xl:gap-12 text-xs sm:text-sm xl:text-lg rounded-xl bg-[#0E2069] p-4'>
                                            <div>{struct.position}</div>
                                            <div>{struct.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex xs:flex-row flex-col items-center">
                            <div className="flex md:hidden flex-col gap-1 justify-between w-max">
                                {head_sctructures.map((struct, i) => (
                                    <div key={i} className='flex items-center text-white gap-4 text-xs sm:text-sm xl:text-lg rounded-xl bg-[#0E2069] p-4'>
                                        <div>{struct.position}</div>
                                        <div>{struct.name}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex-shrink-0 flex flex-col gap-2 xl:gap-4 relative overflow-hidden ps-16 py-8">
                                {structures.map((struct, i) => {
                                    const addOffset = i > 0 && i < 6 ? (windowWidth > 1280 ? 28 : windowWidth > 760 ? 24 : 12) : 0
                                    const addOffset2 = Math.abs(i - 3) === 1 ? 6 : 0
                                    const gap = windowWidth > 1280 ? 24 : 16
                                    return (
                                        <div key={i} className='relative group z-10' style={{
                                            marginLeft: `${gap * (i < 4 ? (i % 4) : (2 - (i % 4))) + addOffset + addOffset2}px`
                                        }}>
                                            <div className="bg-white rounded-full border w-10 xl:w-14 aspect-square absolute top-1/2 left-0 group-hover:left-4 
                                        duration-200 -translate-y-1/2 -translate-x-1/2 border-black" />
                                            <div className="bg-accent-light group-hover:bg-[#D4A445] duration-200 border ps-6 md:ps-10 xl:ps-12 border-black 
                                        rounded-lg flex items-center gap-8 text-xs md:text-xs xl:text-lg 2xl:text-xl w-full py-2">
                                                <div>{struct.position}</div>
                                                <div>{struct.name}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="border-y border-r border-black aspect-square h-full absolute top-1/2 left-0 -translate-x-2/3 -translate-y-1/2 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-transparent border-[16px] border-accent rounded-full" />
                </div>
                <div className="relative w-full">
                    <div className="container-max mx-auto max-w-full">
                        <div className="flex flex-col gap-4 xl:gap-9 items-center w-full md:pe-[33%]">
                            <h2>
                                {isValues ? 'Values' : 'Vision & Mission'}
                            </h2>
                            <div className="flex gap-6 items-center border border-dashed border-primary-900 w-max rounded-full p-2 xl:p-3 font-medium text-white">
                                <button onClick={() => setIsValues(false)} className={`${!isValues ? "bg-primary-500 hover:bg-primary-600 active:bg-primary-700" : "bg-accent hover:bg-[#D58638] active:bg-[#B26526]"} duration-200 hover:bg- py-2 text-center text-sm xl:text-base 
                                w-40 xl:w-72 rounded-full`}>
                                    Vision & Mission
                                </button>
                                <button onClick={() => setIsValues(true)}
                                    className={`${isValues ? "bg-primary-500 hover:bg-primary-600 active:bg-primary-700" : "bg-accent hover:bg-[#D58638] active:bg-[#B26526]"} duration-200 hover:bg- py-2 text-center text-sm xl:text-base 
                                w-40 xl:w-72 rounded-full`}>
                                    Values
                                </button>
                            </div>
                            <p className='relative z-10 text-justify text-xs md:text-base text-neutral-700 min-h-20'>{isValues ? values : our_vision}</p>
                        </div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
                        <div className="relative">
                            <img src='/assets/about_image_2.png' className='h-80' />
                            <div className="absolute top-0 left-0 translate-y-1/4 w-24 h-24 bg-transparent border-[10px] border-accent rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About