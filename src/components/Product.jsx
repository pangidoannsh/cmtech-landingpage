import React, { useState } from 'react'
import { useAppData } from '../App'
import ProductDetail from './ProductDetail';

const Product = () => {
    const { products } = useAppData();
    const [detail, setDetail] = useState({
        open: false,
        data: null
    })
    return (
        <>
            <div className='bg-linear-bold py-12'>
                <div className="container-max">
                    <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                        <div className="flex lg:flex-row flex-col lg:items-center gap-3 lg:gap-12">
                            <div className="flex items-center gap-8">
                                <img src="/assets/product_service_icon.png" className='h-full' />
                                <div className="flex flex-col gap-1 md:gap-3">
                                    <h2 className='font-bold text-2xl lg:text-4xl text-primary-500'>Product Service</h2>
                                    <div className="w-14 h-1 bg-accent" />
                                </div>
                            </div>
                            <p className='md:w-96 text-xs sm:text-sm'>
                                Explore our comprehensive range of network services tailored for the telecommunications industry.
                            </p>
                        </div>
                        {/* <div className='border border-dashed border-primary-900 rounded-full p-2 md:p-3'>
                            <button className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 duration-200 w-full text-white rounded-full py-2 px-10 font-medium lg:text-sm text-xs'>
                                All Product
                            </button>
                        </div> */}
                    </div>
                    <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, i) => (
                            <div key={i} className='bg-cover bg-center flex flex-col gap-4 items-center justify-center w-full h-56' style={{ backgroundImage: `url("${product.img}")` }}>
                                <h4 className='text-center text-white font-bold text-xs lg:text-base py-1 px-6 backdrop-blur-2xl rounded-full bg-white/15'>{product.title}</h4>
                                <div className='w-max border border-dashed border-white rounded-full p-1 md:p-2'>
                                    <button onClick={() => setDetail({ open: true, data: product })} className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 duration-200 text-white rounded-full py-1.5 px-8 text-xs'>
                                        All Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ProductDetail open={detail.open} onCLose={() => setDetail({ open: false, data: null })} title={detail?.data?.title} {...detail?.data?.detail} />
        </>
    )
}

export default Product