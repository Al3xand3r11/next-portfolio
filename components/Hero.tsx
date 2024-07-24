import React from 'react'
import Image from 'next/image'; 

const Hero = () => {
    return (
        <div className='bg-hero h-screen bg-cover bg-center content-center rounded-xl mt-8 ml-8 w-full'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            <div>
                <div className='flex flex-row '>
                <a href="https://github.com/Al3xand3r11" target="_blank">
                <Image
                    src="/github.png"
                    height={100}
                    width={120}
                    alt="github"
                    className='pr-4 transfrom transition duration-300 hover:scale-125'
                />
                </a>
                <a href="https://www.instagram.com/btn.codes/" target="_blank">
                <Image
                     src="/instagram.svg"
                     height={100}
                     width={100}
                     alt="instagram"
                     className='transfrom transition duration-300 hover:scale-125'
                />
                </a>
                </div>
            <div className=' bottom-48 right-96 absolute'>
                <h1 className='text-grey text-5xl font-extrabold'>Software Engineer</h1>
            </div>
                
            </div>
        </div>
        </div>
    )
}

export default Hero;