import { Icon } from "@iconify/react"

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
    return (
        <div className="bg-white z-50 w-screen">
            <div className="relative">
                <nav className='flex item-center justify-between relative container-max py-4 z-[60]'>
                    <div className='flex-shrink-0'>
                        <img src="/assets/logo.png" alt="logo_cmtech" className='h-14' />
                    </div>
                </nav>
            </div>
            <div className='bg-gradient-to-b from-[#22298C] to-[#090B26] py-4'>
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
            </div>
        </div>
    )
}

export default Navbar