import Image from 'next/image'
import React from 'react'
import OnlineStatus from './OnlineStatus'

interface CircleImageProps {
    src: string | undefined,
    alt: string,
    isOnline?: boolean
    isOnlineStatusShown: boolean
}

function CircleImage(
    { src, alt, isOnline, isOnlineStatusShown }: CircleImageProps
) {
    return (
        <div className="w-12 h-12 relative">
            <Image
                src={src || 'https://res.cloudinary.com/dgq51r8zo/image/upload/v1689687709/defaultUser_atxd9u.png'}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-[50%]'
            />
            {
                isOnlineStatusShown
                &&
                <OnlineStatus isOnline={isOnline} />
            }
        </div>
    )
}

export default CircleImage