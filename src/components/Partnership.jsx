import { useAppData } from '../App'
const Partnership = () => {
    const { vendors } = useAppData()

    return (
        <div className='pt-4 pb-7 flex flex-col gap-3 items-center border-y border-primary-900'>
            <h2 className='font-semibold text-xl'>Vendor</h2>
            <div className="container-max">
                <div className="overflow-hidden whitespace-nowrap w-full">
                    <div className="flex animate-marquee">
                        {[...vendors, ...vendors].map((vendor) => (
                            <div
                                key={vendor + "-" + Math.random()}
                                className={`mx-12 py-2 text-white rounded-xl`}
                            >
                                <div className="w-36 !h-full flex items-center">
                                    <img src={vendor} alt={vendor} className='w-full' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership