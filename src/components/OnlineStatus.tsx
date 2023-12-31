import { OnlineStatusProps } from '@/types/OnlineStatusProps'
import React from 'react'

function OnlineStatus(
    { isOnline }: OnlineStatusProps
) {
    return (
        <div
            className={`
                absolute right-0 bottom-0 h-2 w-2 rounded-full
                ${isOnline ? 'bg-green-600' : 'bg-red-600'}
            `}
        >
        </div>
    )
}

export default OnlineStatus