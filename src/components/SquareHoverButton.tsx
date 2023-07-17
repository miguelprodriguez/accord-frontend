import Image, { StaticImageData } from 'next/image'
import React, { MouseEventHandler } from 'react'

interface SquareHoverButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>,
    icon: StaticImageData,
    alt: string,
    buttonClassName?: string
    iconClassName?: string
}

function SquareHoverButton(
    { onClick, icon, buttonClassName, iconClassName, alt }: SquareHoverButtonProps
) {
    return (
        <button className={`hover:bg-gray-200 rounded-lg p-1 ${buttonClassName}`} onClick={onClick}>
            <Image
                src={icon}
                className={iconClassName}
                alt={alt}
            />
        </button>
    )
}

export default SquareHoverButton