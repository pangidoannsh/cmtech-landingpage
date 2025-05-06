import React from 'react'
import { useAppData } from '../App'

const About = () => {
    const { about_us } = useAppData()
    return (
        <section className='flex flex-col gap-12 container-max items-center'>
            <h2>About Us</h2>
            <p className='text-2xl text-accent text-justify'>{about_us}</p>
        </section>
    )
}

export default About