import { useState } from 'react'
import PowerSystemTab from './company/PowerSystemTab'
import CertificatesTab from './company/CertificatesTab'
import { useAppData } from '../App'
import { Icon } from '@iconify/react'
import ToolsTab from './company/ToolsTab'
const profiles = [
    {
        label: "Power System",
        content: <PowerSystemTab />
    },
    {
        label: "Certificates",
        content: <CertificatesTab />
    },
    {
        label: "Tool Set & Instrument",
        content: <ToolsTab />
    },
]
const Company = ({ reference }) => {
    const { windowWidth } = useAppData()
    const [current, setCurrent] = useState(0)

    return (
        <section id='company' ref={reference} className='flex flex-col gap-8 lg:gap-11 py-12 container-max items-center'>
            <div className='flex flex-col gap-4 items-center w-max mx-auto'>
                <h2>Company</h2>
                <div className='bg-primary-500 w-1/2 h-1 rounded-full' />
            </div>
            {windowWidth > 1024 ? (
                <div className="flex items-center ">
                    {profiles.map((profile, i) => (
                        <button key={i} onClick={() => setCurrent(i)} className={`p-2 min-w-60 border-y-2 text-xl text-neutral-700 
                    ${i === current ? "border-primary-500" : "border-neutral-300"}`}>
                            {profile.label}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="flex items-center gap-3 min-w-60 justify-between">
                    <button
                        disabled={current === 0}
                        onClick={() => setCurrent(prev => {
                            if (prev === 0) return prev
                            return prev - 1
                        })}
                        className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
                          w-6 h-6 flex items-center justify-center rounded text-white'>
                        <Icon icon="ic:round-chevron-left" className='text-lg' />
                    </button>
                    <div className='min-w-24 text-center'>
                        {profiles[current]?.label || "undefined"}
                    </div>
                    <button
                        disabled={current === profiles.length - 1}
                        onClick={() => setCurrent(prev => {
                            if (prev === profiles.length - 1) return prev
                            return prev + 1
                        })}
                        className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
                          w-6 h-6 flex items-center justify-center rounded text-white'>
                        <Icon icon="ic:round-chevron-right" className='text-lg' />
                    </button>
                </div>
            )}
            <div className="w-full">
                {profiles[current].content}
            </div>
        </section>
    )
}

export default Company