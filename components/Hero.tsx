import React from 'react'
import Image from 'next/image'; 

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div className='relative w-full'>
            <div>
            <Image 
                    src="/Hero.png"
                    className='w-full rounded-lg'
                    width={1000}
                    height={1000}
                    alt="Background"
                />
            </div>
                
            </div>
        </div>
    )
}

export default Hero;