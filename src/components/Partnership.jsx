import { Icon } from '@iconify/react'
import { useAppData } from '../App'

const Partnership = () => {
    const { partnership } = useAppData()
    const totalPartner = Object.values(partnership).flat().length
    return (
        <div className='py-12 flex flex-col items-center relative'>
            <h2>Partnership</h2>
            <span className='text-lg mt-3 relative z-10'>Collaborating with {totalPartner} trusted partners</span>
            <img src="/assets/partnership_icon.png" className='mt-4 h-8' />
            <div className="flex md:flex-row flex-col gap-8 xl:gap-24 mt-14 w-full container-max items-stretch">
                {
                    totalPartner > 0 && Object.entries(partnership).map(obj => {
                        const [key, items] = obj
                        return (
                            <div key={key} className='bg-white border border-black p-8 rounded-3xl w-full'>
                                <div className='flex flex-col gap-3'>
                                    <h4 className='font-extrabold text-xl uppercase'>{key === "operator" ? "Opreator/Provider" : key}</h4>
                                    <div className="h-1 w-12 bg-accent" />
                                </div>
                                {items.map((m, i) => (
                                    <div key={m} className={`w-full flex py-2 sm:py-3 lg:py-5 ${i === items.length - 1 ? "justify-center" : i % 2 !== 0 ? "justify-end" : ""}`}>
                                        <img src={m} className='h-8 sm:h-10 md:h-6 lg:h-12' />
                                    </div>
                                ))}
                            </div>
                        )
                    })
                }
            </div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 w-24 h-24 border-[16px] border-primary-500 bg-transparent rounded-full" />
            <div className="absolute w-16 h-16 top-24 right-0 translate-x-1/4 bg-accent rounded-full" />
        </div>
    )
}

export default Partnership