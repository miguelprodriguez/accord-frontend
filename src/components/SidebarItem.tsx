import truncateText from '@/helpers/truncateText'
import { SidebarItemProps } from '@/types/SidebarItemProps'
import React from 'react'
import OnlineStatus from './OnlineStatus'
import { useUserContext } from '@/app/context/userStore'
import CircleImage from './CircleImage'

const MESSAGE_LIMIT_PREVIEW = 27

export default function SidebarItem({
    index,
    chat,
    isSidebarCollapsed
}: SidebarItemProps) {

    const { currentUser } = useUserContext()

    const chatMate = chat.participants.find((participant: any) => {
        return participant.userId !== currentUser?.userId
    })

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
            {/* <OnlineStatus isOnline={data.isOnline} /> */}
            <CircleImage src={chatMate.image} alt={chatMate.username}
            />
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
