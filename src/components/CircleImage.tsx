import Image from 'next/image'
import React from 'react'

interface CircleImageProps {
    src: string,
    alt: string
}

function CircleImage(
    { src, alt }: CircleImageProps
) {
    return (
        <div className="w-12 h-12 relative">
            <Image
                src={src}
                alt={alt}
                fill
                className='object-cover rounded-[50%]'
            />
            {/* <OnlineStatus isOnline={data.isOnline} /> */}
        </div>
    )
}

export default CircleImage