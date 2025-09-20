import { useAppData } from "../App"

const OurValues = () => {
    const { our_values } = useAppData();
    return (
        <section className="bg-primary-100 py-14">
            <div className="container-max flex flex-col gap-20">
                <h2 className="font-bold text-primary-500 text-2xl text-center">Our Values to Customer</h2>
                <div className="grid grid-cols-3">
                    {our_values.map((ourValue, i) => (
                        <div key={i} className={`flex flex-col gap-3 py-3 px-6 ${i % 2 === 0 ? 'bg-primary-100' : 'bg-white'}`}>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-center text-white font-bold">
                                    {i > 9 ? i + 1 : "0" + (i + 1)}
                                </div>
                                <div className="font-bold text-lg text-primary-500">{ourValue.title}</div>
                            </div>
                            <p className="pl-12 text-sm text-neutral-700">
                                {ourValue.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurValues