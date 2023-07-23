import Image from 'next/image'
import React from 'react'
import OnlineStatus from './OnlineStatus'

interface CircleImageProps {
    src: string,
    alt: string,
    isOnline: boolean
}

function CircleImage(
    { src, alt, isOnline }: CircleImageProps
) {
    return (
        <div className="w-12 h-12 relative">
            <Image
                src={src}
                alt={alt}
                fill
                className='object-cover rounded-[50%]'
            />
            <OnlineStatus isOnline={isOnline} />
        </div>
    )
}

export default CircleImage