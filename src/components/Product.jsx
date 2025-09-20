import React from 'react'
import { useAppData } from '../App'

const Product = () => {
    const { products } = useAppData();
    return (
        <div className='bg-white py-12'>
            <div className="container-max">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <div className="flex flex-col gap-3">
                            <h2 className='text-center font-bold text-4xl text-primary-500'>Product Service</h2>
                            <div className="w-14 h-1 bg-accent" />
                        </div>
                        <p className='w-96 text-sm'>
                            Explore our comprehensive range of network services tailored for the telecommunications industry.
                        </p>
                    </div>
                    <div className='border border-dashed border-primary-900 rounded-full p-3'>
                        <button className='bg-primary-500 text-white rounded-full py-2 px-10 font-medium'>
                            All Product
                        </button>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <div key={i} className='bg-cover bg-center flex flex-col gap-4 items-center justify-center w-full h-56' style={{ backgroundImage: `url("${product.img}")` }}>
                            <h4 className='w-max text-white font-bold text-base py-1 px-6 backdrop-blur-2xl rounded-full bg-white/15'>{product.title}</h4>
                            <div className='w-max border border-dashed border-white rounded-full p-2'>
                                <button className='bg-primary-500 text-white rounded-full py-1.5 px-8 text-xs'>
                                    All Product
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product