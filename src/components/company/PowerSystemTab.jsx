const images = [
    {
        className: '',
        src: "/assets/power_system/1.webp"
    },
    {
        className: 'w-40',
        src: "/assets/power_system/2.webp"
    },
    {
        className: 'w-60',
        src: "/assets/power_system/3.webp"
    },
    {
        className: 'h-full',
        src: "/assets/power_system/4.webp"
    },
]
const PowerSystemTab = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 w-full items-stretch'>
            <div className="flex-shrink-0 w-full lg:w-[68%] h-full rounded-xl overflow-clip border border-black">
                <img src="/assets/power_system/1.webp" className='w-full h-full object-cover' />
            </div>
            <div className="flex-1 max-w-full flex flex-col gap-6 h-full">
                <div className="flex-shrink-0 flex gap-6">
                    <div className="w-40 h-full rounded-xl overflow-clip border border-black">
                        <img src="/assets/power_system/2.webp" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex-1 h-[220px] rounded-xl overflow-clip border border-black">
                        <img src="/assets/power_system/3.webp" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="w-full rounded-xl overflow-clip border border-black">
                        <img src="/assets/power_system/4.webp" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerSystemTab