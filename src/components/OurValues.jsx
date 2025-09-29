import { useAppData } from "../App"

const OurValues = () => {
    const { our_values, windowWidth } = useAppData();
    return (
        <section className="py-8 lg:py-14">
            <div className="container-max flex flex-col gap-12 lg:gap-20">
                <div className="text-center flex items-center justify-center gap-6">
                    <img src="/assets/our_values_icon.png" className="h-12" />
                    <div className="flex flex-col gap-1 md:gap-3">
                        <h2 className="text-start">Our Values to Customer</h2>
                        <div className="w-14 h-1 bg-accent" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {our_values.map((ourValue, i) => {
                        let bg = "bg-white";

                        if (windowWidth < 1024 && windowWidth > 640) {
                            const colCount = 2;
                            const row = Math.floor(i / colCount);

                            const col = i % colCount;
                            bg = (row + col) % 2 === 0 ? "bg-transparent" : "bg-white";
                        } else {
                            bg = i % 2 === 0 ? "bg-transparent" : "bg-white";
                        }

                        return (
                            <div
                                key={i}
                                className={`flex flex-col gap-1 lg:gap-3 py-3 px-6 ${bg}`}
                            >
                                <div className="flex items-center gap-2 lg:gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full text-xs lg:text-sm bg-primary-500 flex items-center justify-center text-center text-white font-bold">
                                        {i > 9 ? i + 1 : "0" + (i + 1)}
                                    </div>
                                    <div className="font-bold text-base xl:text-lg text-primary-500">
                                        {ourValue.title}
                                    </div>
                                </div>
                                <p className="pl-10 lg:pl-12 text-sm text-neutral-700">
                                    {ourValue.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


export default OurValues