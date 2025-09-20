import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0)
    useEffect(() => {
        function onScroll() {
            setScrollTop(window.scrollY);
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    const hide = scrollTop > 50
    return (
        <header className='bg-primary-900 text-white flex items-center overflow-hidden duration-500'
            style={{
                height: `${hide ? 0 : 44}px`,
                opacity: `${hide ? 0 : 1}`,
            }}
        >
            <div className='flex justify-between items-center container-max mx-auto w-full'>
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:telephone-in-talk" className='text-xl' />
                        <span className='text-sm'>+62-811-802-315</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:cellphone" className='text-xl' />
                        <span className='text-sm'>(021) 3885-1014</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header