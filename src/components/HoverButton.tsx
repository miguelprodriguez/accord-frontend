import Image, { StaticImageData } from 'next/image'
import React, { MouseEventHandler } from 'react'

interface HoverButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>,
    icon: StaticImageData,
    alt: string,
    className?: string
}

function HoverButton(
    { onClick, icon, className, alt }: HoverButtonProps
) {
    return (
        <button className='hover:bg-gray-200 rounded-full p-1' onClick={onClick}>
            <Image
                src={icon}
                className={className}
                alt={alt}
            />
        </button>
    )
}

export default HoverButton