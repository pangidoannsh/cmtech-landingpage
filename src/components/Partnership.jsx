import React, { useState } from 'react'
import { useAppData } from '../App'
import { Icon } from '@iconify/react/dist/iconify.js'

const Partnership = () => {
    const { partnership } = useAppData()
    const totalPartner = Object.values(partnership).flat().length

    return (
        <div className='bg-linear py-12 flex flex-col items-center'>
            <h2>Partnership</h2>
            <span className='text-accent/60 text-lg mt-3'>Collaborating with {totalPartner} trusted partners</span>
            <div className="flex lg:flex-row flex-col gap-24 mt-14 w-full container-max">
                {
                    totalPartner > 0 && Object.entries(partnership).map(obj => {
                        const [key, items] = obj
                        return (
                            <div key={key} className='bg-white border border-black h-max p-8 rounded-3xl w-full'>
                                <h4 className='font-extrabold text-xl uppercase'>{key === "operator" ? "Opreator/Provider" : key}</h4>
                                <div className="flex gap-2 items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Icon key={i} icon="ic:sharp-star" className='text-xl text-primary-500' />
                                    ))}
                                </div>
                                {items.map((m, i) => (
                                    <div key={m} className={`w-full flex py-5 ${i === items.length - 1 ? "justify-center" : i % 2 !== 0 ? "justify-end" : ""}`}>
                                        <img src={m} className='h-12' />
                                    </div>
                                ))}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partnership