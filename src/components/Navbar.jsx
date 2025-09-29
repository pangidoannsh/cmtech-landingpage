import { Icon } from "@iconify/react"
import { useEffect, useRef, useState } from "react"
import Header from "./Header"

const menus = [
    {
        label: "Home",
        icon: "material-symbols-light:home-rounded"
    },
    {
        label: "About",
        icon: "mdi:about"
    },
    {
        label: "Product Services",
        icon: "ant-design:product-filled"
    },
    {
        label: "Portfolio",
        icon: "dashicons:portfolio"
    },
    {
        label: "Company",
        icon: "ri:building-fill"
    },
]
const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollTop = useRef(0);
    const timeoutRef = useRef();
    const [showNavMobile, setShowNavMobile] = useState(false)
    useEffect(() => {
        function onScroll() {
            const currentScroll = window.scrollY;
            setScrollTop(currentScroll);

            if (currentScroll > 400) {
                if (currentScroll > lastScrollTop.current) {
                    setShowNavbar(false);

                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                        setShowNavbar(true);
                    }, 1000);
                }
                else {
                    setShowNavbar(true);
                }
            } else {
                setShowNavbar(true)
            }

            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return (
        <>
            <div className={`fixed z-50 duration-700 top-0 ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <Header hide={scrollTop > 50} />
                <div className="bg-white z-50 w-screen">
                    <div className="relative">
                        <div className='flex item-center justify-between relative container-max py-3 sm:py-4 z-[60]'>
                            <div className='flex-shrink-0'>
                                <img src="/assets/logo.png" alt="logo_cmtech" className='h-14' />
                            </div>
                            <button onClick={() => setShowNavMobile(true)} className="sm:hidden bg-white p-2 rounded-full">
                                <Icon icon="material-symbols:menu-rounded" className='text-3xl text-primary-500' />
                            </button>
                        </div>
                    </div>
                    <nav className='bg-gradient-to-b from-[#22298C] to-[#090B26] py-4 hidden sm:block'>
                        <div className="container-max justify-between items-center flex">
                            <ul className="flex items-center gap-12">
                                {menus.map((m, i) => (
                                    <li key={i} className='text-lg cursor-pointer text-neutral-300 hover:text-neutral-50 duration-150 font-medium flex items-center gap-2'>
                                        <Icon icon={m.icon} className='text-lg' />
                                        <span className="text-sm">{m.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-white text-primary-900 font-semibold rounded-lg px-4 py-2">
                                Contact
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div onClick={() => setShowNavMobile(false)} className={`fixed top-0 w-screen h-screen z-[80] bg-black/30 ${showNavMobile ? "block" : "hidden"}`} />
            <nav className={`fixed h-screen z-[90] duration-200 top-0 right-0 bg-gradient-to-b from-[#22298C] to-[#090B26] py-4 block sm:hidden 
                    ${showNavMobile ? "translate-x-0" : "translate-x-full"}`}>
                <div className="relative">
                    <button onClick={() => setShowNavMobile(false)} className="absolute top-4 right-4">
                        <Icon icon="material-symbols:close-rounded" className='text-3xl text-primary-100' />
                    </button>
                </div>
                <div className="flex py-12 px-3 flex-col gap-10">
                    <ul className="flex flex-col gap-8">
                        {menus.map((m, i) => (
                            <li key={i} className='text-lg focus:bg-white/20 hover:bg-white/20 rounded-lg py-2 px-4 cursor-pointer text-neutral-300 hover:text-neutral-50 duration-150 font-medium flex items-center gap-2'>
                                <Icon icon={m.icon} className='text-lg' />
                                <span className="text-sm">{m.label}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-white text-primary-900 font-semibold rounded-lg px-4 py-2">
                        Contact
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar