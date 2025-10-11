import Atropos from "atropos/react";
import { useAppData } from "../App";
import 'atropos/css'
import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function Portfolio({ reference }) {
    const { portfolios } = useAppData()
    const [popup, setPopup] = useState({
        open: false,
        data: null
    })
    return (
        <>
            <div id="portfolio" ref={reference} className="relative py-10 bg-cover bg-center z-10 text-white" style={{ backgroundImage: `url("/assets/portfolio_bg.jpg")` }}>
                <div className="absolute -z-10 bg-primary-500/45 w-full h-full top-0 left-0" />
                <h2 className="text-white text-center">Portfolio</h2>
                <p className="text-center my-8">
                    Showcasing our field expertise in delivering reliable network solutions
                </p>
                <div className="flex md:flex-row flex-col justify-center gap-8 container-max relative">
                    {portfolios.map((item, index) => (
                        <Atropos
                            key={index}
                            activeOffset={80}
                            shadowScale={0}
                            className="relative w-full h-72 cursor-pointer"
                            onClick={() => setPopup({ open: true, data: item })}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-2">
                                <p className="text-sm font-semibold py-1 backdrop-blur-2xl bg-black/15 rounded-xl px-12">{item.title}</p>
                            </div>
                        </Atropos>
                    ))}
                </div>
            </div>
            <Dialog
                showHeader={false}
                visible={popup.open}
                contentClassName=" pt-6"
                className='w-[90vw] lg:w-[600px]'
                dismissableMask
                onHide={() => setPopup({ open: false, data: null })}
                closable={false}
            >
                <div className="flex flex-col gap-2">
                    {popup.data && (
                        <>
                            <img src={popup.data.img} className="w-full object-cover" />
                            <div>
                                <div className="flex font-medium text-lg text-neutral-700">
                                    <div className="w-20">Product</div>
                                    <div>: {popup.data.title}</div>
                                </div>
                                <div className="flex font-medium text-lg text-neutral-700">
                                    <div className="w-20">Date</div>
                                    <div>: {popup.data.date}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Dialog>
        </>
    );
}
