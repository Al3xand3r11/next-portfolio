import React from 'react'
import Image from 'next/image'; 

const Hero = () => {
    return (
        <div className='bg-hero h-screen bg-cover bg-center content-center rounded-xl md:mt-8 ml-3 md:ml-8 w-full'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            <div>
                <div className='flex flex-row justify-between '>
                <div className='flex flex-row'>
                <a href="https://github.com/Al3xand3r11" target="_blank">
                <Image
                    src="/github.png"
                    height={100}
                    width={120}
                    alt="github"
                    className='pr-4 transfrom transition duration-300 hover:scale-125'
                    priority
                />
                </a>
                <a href="https://www.instagram.com/btn.codes/" target="_blank">
                <Image
                     src="/instagram.svg"
                     height={100}
                     width={100}
                     alt="instagram"
                     className='transfrom transition duration-300 hover:scale-125'
                     priority
                />
                </a>
                </div>
                <div className='justify-end text-right items-end pt-12'>
                <h1 className='text-grey text-2xl lg:text-4xl xl:text-5xl font-extrabold '>Software Engineer</h1>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;