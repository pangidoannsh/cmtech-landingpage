import { Icon } from "@iconify/react/dist/iconify.cjs"
import { useAppData } from "../App"

const Address = () => {
    const { address } = useAppData()
    return (
        <section className="py-12 bg-cover bg-center" style={{ backgroundImage: `url("/assets/portfolio_bg.jpg")` }}>
            <div className="container-max ">
                <div className="flex rounded-3xl bg-white/75 backdrop-blur-[8px] items-center">
                    <div className="px-12 py-12">
                        <div className="flex flex-col justify-center items-start gap-4 w-96">
                            <h2 className="font-semibold text-2xl text-neutral-900">Find Us</h2>
                            <h3 className="text-primary-900 text-xl">PT Cahaya Mitratama Technology</h3>
                            <div className="flex gap-3">
                                <Icon icon="carbon:location-company-filled" className="text-4xl flex-shrink-0 text-neutral-900" />
                                <p className="text-sm text-justify">{address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 rounded-3xl overflow-clip">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.3467716993214!2d106.91283417988775!3d-6.230645141590179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cb4922a8307%3A0x67ce685ab5eb3436!2sPt.%20Cahaya%20Mitratama%20Technology!5e0!3m2!1sid!2sid!4v1758238691745!5m2!1sid!2sid"
                            width="100%" height={450} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Address