import React from 'react'

const menus = [
    {
        label: "Home",
    },
    {
        label: "About",
    },
    {
        label: "Company",
    },
    {
        label: "Contact",
    },
]
const Navbar = () => {
    return (
        <div className="fixed bg-body z-50 w-screen">
            <div className="relative">
                <nav className='flex item-center justify-between relative container-max py-4 z-[60]'>
                    <div className='flex-shrink-0'>
                        <img src="/assets/logo.png" alt="logo_cmtech" className='h-[72px]' />
                    </div>
                    <ul className='flex items-center gap-12'>
                        {menus.map((m, i) => (
                            <li key={i} className='font-extrabold text-lg text-accent'>
                                {m.label}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E7EFFA] to-white/0 z-50" />
            </div>
        </div>
    )
}

export default Navbar