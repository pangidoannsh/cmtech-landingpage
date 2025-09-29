import { Icon } from "@iconify/react"
import { useAppData } from "../App"

const Footer = () => {
    const { footer_paragraph, social_media, contacts, copyright } = useAppData()
    const companies = [
        {
            title: "Home",
        },
        {
            title: "Area Work",
        },
        {
            title: "About",
        },
        {
            title: "Company",
        },
        {
            title: "Product Services",
        },
        {
            title: "Portfolio",
        },
        {
            title: "Contact",
        },

    ]
    return (
        <footer className="bg-[#20283A] text-white">
            <div className="container-max py-10 flex sm:flex-row flex-col gap-6 sm:justify-between font-inter">
                <div className="w-full md:w-96 xl:w-[520px]">
                    <h4 className="text-xl sm:text-2xl">We're here to help</h4>
                    <p className="text-xs lg:text-sm mt-3 lg:mt-6 mb-4 text-justify">"{footer_paragraph}"</p>
                    <div className="flex items-center gap-2 sm:gap-4">
                        {social_media.map((s, i) => (
                            <a href={s.link} key={i} className="mr-4">
                                <Icon icon={s.icon} className="text-lg md:text-2xl" />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl">Company</h4>
                    <ul className="mt-3 lg:mt-6 grid grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-3 lg:gap-y-6">
                        {companies.map(({ title }, i) => (
                            <li key={i}>
                                <div className="text-xs lg:text-base">{title}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl sm:text-2xl">Message Us</h4>
                    <ul className="mt-3 lg:mt-6 flex flex-col gap-6">
                        {contacts.map((c, i) => (
                            <li key={i}>
                                {c.link ? (
                                    <a href={c.link} className="flex items-center gap-2 lg:gap-4">
                                        <Icon icon={c.icon} className="textlg lg:text-2xl" />
                                        <div className="text-xs lg:text-base">{c.label}</div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-2 lg:gap-4">
                                        <Icon icon={c.icon} className="text-lg lg:text-2xl" />
                                        <div className="text-xs lg:text-base">{c.label}</div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-white/50 py-3 sm:py-6 text-[10px] sm:text-sm">
                {copyright}
            </div>
        </footer>
    )
}

export default Footer