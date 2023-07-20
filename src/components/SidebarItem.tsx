import truncateText from '@/helpers/truncateText'
import { SidebarItemProps } from '@/types/SidebarItemProps'
import Image from 'next/image'
import React from 'react'
import OnlineStatus from './OnlineStatus'
import { useUserContext } from '@/app/context/userStore'

const MESSAGE_LIMIT_PREVIEW = 27

export default function SidebarItem({
    index,
    chat,
    isSidebarCollapsed
}: SidebarItemProps) {

    const { currentUser } = useUserContext()

    const chatMate = chat.participants.find((participant: any) => participant.userId !== currentUser?.userId)

    const handleLastSender = () => {
        if (chat.lastMessage.sender.username === currentUser?.username) return 'You'
        return chat.lastMessage.sender.username
    }

    return (
        <button
            key={index}
            className={`
                flex items-center gap-5 p-2.5
                hover:bg-slate-200 rounded-xl
            `}
        >
            <div className="w-12 h-12 relative">
                <Image
                    src={chatMate.image}
                    alt={chatMate.username}
                    fill
                    className='object-cover rounded-[50%]'
                />
                {/* <OnlineStatus isOnline={data.isOnline} /> */}
            </div>
            {isSidebarCollapsed &&
                <div className='text-left'>
                    <h2 className='font-bold'>{chatMate.username}</h2>
                    <p className='text-gray-500'>
                        {handleLastSender()}:
                        {' '}
                        {truncateText(chat.lastMessage.content, MESSAGE_LIMIT_PREVIEW)}
                    </p>
                </div>
            }
        </button>
    )
}
