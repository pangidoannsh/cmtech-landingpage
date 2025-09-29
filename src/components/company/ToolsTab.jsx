
const ToolsTab = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-3 max-w-full overflow-hidden'>
            <div className="flex gap-3 lg:flex-1">
                <div className="flex-1">
                    <img src={"/assets/tools/1.webp"} className={`object-cover w-full h-full`} />
                </div>
                <div className="flex-1">
                    <img src={"/assets/tools/2.webp"} className={`object-cover w-full h-full`} />
                </div>
                <div className="flex-1">
                    <img src={"/assets/tools/3.webp"} className={`object-cover w-full h-full`} />
                </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 w-full lg:w-1/3">
                <div className="flex-1">
                    <img src={"/assets/tools/4.webp"} className={`object-cover w-full`} />
                </div>
                <div className="flex-1 flex gap-3 items-center">
                    <div className="flex-1">
                        <img src={"/assets/tools/5.webp"} className={`object-cover h-full`} />
                    </div>
                    <div className="flex-1">
                        <img src={"/assets/tools/6.webp"} className={`object-cover h-full`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsTab