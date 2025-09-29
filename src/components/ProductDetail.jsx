import React from 'react'

import { Dialog } from 'primereact/dialog';

const ProductDetail = ({ open, onCLose, desc, services, portfolio, title }) => {
    return (
        <Dialog
            visible={open}
            className='w-[90vw] lg:w-[896px] xl:w-[1152px] 2xl:w-[1440px]'
            dismissableMask
            onHide={onCLose}
            header={(
                <div className="flex flex-col gap-1 md:gap-3">
                    <h2 className="text-start">{title}</h2>
                    <div className="w-14 h-1 bg-accent" />
                </div>
            )}
        >
            <div className="flex flex-col gap-6">
                <div className='flex flex-col gap-3'>
                    <div className="flex flex-3 font-semibold text-lg text-neutral-900">Descriptions</div>
                    <p className='text-neutral-700'>{desc}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className="flex flex-3 font-semibold text-lg text-neutral-900">Type of Services</div>
                    <ul className='text-neutral-700'>
                        {services?.length > 0 && services.map((s, i) => (
                            <li key={i} className='text-neutral-700 list-disc ml-5'>{s}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className="flex flex-3 font-semibold text-lg text-neutral-900">Type of Services</div>
                    <div className='flex items-center gap-6'>
                        {portfolio?.length > 0 && portfolio.map((p, i) => (
                            <div key={i} className='flex-1 w-full h-full xl:min-h-96 lg:min-h-80 md:min-h-72'>
                                <img src={p} className='object-cover w-full h-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ProductDetail