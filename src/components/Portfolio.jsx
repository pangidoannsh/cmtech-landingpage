import Atropos from "atropos/react";
import { useAppData } from "../App";
import 'atropos/css'

export default function Portfolio() {
    const { portfolios } = useAppData()
    return (
        <div className="relative py-10 bg-cover bg-center z-10 text-white" style={{ backgroundImage: `url("/assets/portfolio_bg.jpg")` }}>
            <div className="absolute -z-10 bg-primary-500/45 w-full h-full top-0 left-0" />
            <h2 className="font-bold text-4xl text-center">Portfolio</h2>
            <p className="text-center my-8">
                Showcasing our field expertise in delivering reliable network solutions
            </p>
            <div className="flex justify-center gap-8 container-max relative">
                {portfolios.map((item, index) => (
                    <Atropos
                        key={index}
                        activeOffset={80}
                        shadowScale={0}
                        className="relative w-full h-72 "
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
    );
}
