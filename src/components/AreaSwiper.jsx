import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Icon } from '@iconify/react';
import { jawa, sumatera, kalimantan, sulawesi } from '../const';
import { useEffect, useRef, useState } from 'react';

const areas = [
  {
    label: "Sumatera",
    data: sumatera,
    img: "/assets/islands/sumatera.png"
  },
  {
    label: "Jawa",
    data: jawa,
    img: "/assets/islands/jawa.png"
  },
  {
    label: "Kalimantan",
    data: kalimantan,
    img: "/assets/islands/kalimantan.png"
  },
  {
    label: "Sulawesi",
    data: sulawesi,
    img: "/assets/islands/sulawesi.png"
  },
]
export default function AreaSwiper() {
  const swiperRef = useRef(null)
  const [slide, setSlide] = useState({ active: 0, total: areas.length })

  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="flex items-center gap-3">
        <button
          disabled={slide.active === 0}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
          w-6 h-6 flex items-center justify-center rounded text-white'>
          <Icon icon="ic:round-chevron-left" className='text-lg' />
        </button>
        <div className='min-w-24 text-center'>
          {areas[slide.active]?.label || "undefined"}
        </div>
        <button
          disabled={slide.active === areas.length - 1}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className='bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-400 duration-200
          w-6 h-6 flex items-center justify-center rounded text-white'>
          <Icon icon="ic:round-chevron-right" className='text-lg' />
        </button>
      </div>
      <Swiper
        spaceBetween={48}
        slidesPerView={1}
        onSlideChange={(swiper) => setSlide(prev => ({ ...prev, active: swiper.activeIndex }))}
        ref={swiperRef}
        className='w-full'
      >
        {areas.map((area, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center">
              <div className='w-max relative'>
                {area.data.map((m, i) => (
                  <div key={i} className="absolute gap-0.5" style={{ left: m.x, top: m.y }}>
                    <div className="relative w-max">
                      <img src="/assets/yellow_marker.png" className='w-4' />
                    </div>
                    <div className="absolute top-0 translate-y-5 left-1/2 -translate-x-1/2">
                      <div className="bg-white/50 backdrop-blur-sm font-bold px-1.5 rounded-md text-[8px] w-max border border-white/50">{m.label}</div>
                    </div>
                  </div>
                ))}
                <img src={area.img} className='w-52' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};