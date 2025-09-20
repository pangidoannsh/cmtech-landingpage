import { useAppData } from '../App'

const About = () => {
    const { about_us, our_vision } = useAppData()
    return (
        <section className='flex flex-col gap-24 items-center'>
            <h2 className='text-center w-full header-about py-8 uppercase font-semibold text-2xl text-white'>PT. CAHAYA MITRATAMA</h2>
            <div className="flex flex-col gap-44">
                <div className="container-max mx-auto">
                    <div className="flex flex-col gap-2 w-full ps-[33%]">
                        <div className="flex items-center gap-3">
                            <div className="bg-neutral-500 h-6 w-0.5" />
                            About Us
                        </div>
                        <h3 className='text-primary-500 font-bold text-2xl'>Who we are</h3>
                        <p className='text-justify text-base text-neutral-700'>{about_us}</p>
                    </div>
                </div>
                <div className="container-max mx-auto">
                    <div className="flex flex-col gap-9 items-center w-full pe-[33%]">
                        <h3 className='text-primary-500 font-bold text-2xl'>Vision & Mission</h3>
                        <div className="flex gap-6 items-center border border-dashed border-primary-900 w-max rounded-full p-3 font-medium text-white">
                            <button className='bg-primary-500 py-2 text-center w-72 rounded-full'>
                                Vision & Mission
                            </button>
                            <button className='bg-accent py-2 text-center w-72 rounded-full'>
                                Values
                            </button>
                        </div>
                        <p className='text-justify text-base text-neutral-700'>{our_vision}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About