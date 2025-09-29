import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppData } from '../../App'

const total = 18
const CertificatesTab = () => {
    const { windowWidth } = useAppData();
    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <div className="relative px-6">
            <button
                disabled={currentSlide === 0}
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
                  w-6 h-6 flex items-center justify-center rounded text-white absolute top-1/2 -translate-y-1/2 -left-1 z-30'>
                <Icon icon="ic:round-chevron-left" className='text-lg' />
            </button>

            <button
                disabled={currentSlide === total - 1}
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
                  w-6 h-6 flex items-center justify-center rounded text-white absolute top-1/2 -translate-y-1/2 -right-1 z-30'>
                <Icon icon="ic:round-chevron-right" className='text-lg' />
            </button>
            <Swiper
                key={windowWidth > 1024}
                ref={swiperRef}
                slidesPerView={windowWidth > 1024 ? 4 : windowWidth > 600 ? 3 : 1}
                spaceBetween={24}
                freeMode={true}
                className="w-full h-full"
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
                {Array.from({ length: total }).map((_, i) => (
                    <SwiperSlide key={i} className='flex flex-col h-full'>
                        <div className='flex-1 h-full w-full flex items-center justify-center'>
                            <img src={`/assets/certificates/certificates${i + 1}.webp`} className='h-full' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CertificatesTab