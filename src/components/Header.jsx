import { Icon } from '@iconify/react'

const Header = ({ hide }) => {
    return (
        <header className='bg-primary-900 text-white flex items-center overflow-hidden duration-500'
            style={{
                height: `${hide ? 0 : 44}px`,
                opacity: `${hide ? 0 : 1}`,
            }}
        >
            <div className='flex justify-between items-center container-max mx-auto w-full'>
                <div className="flex items-center gap-12 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:telephone-in-talk" className='text-xl' />
                        <span>+62-811-802-315</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:cellphone" className='text-xl' />
                        <span>(021) 3885-1014</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header