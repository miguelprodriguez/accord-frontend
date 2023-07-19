import { useGlobalChatContext } from '@/app/context/store'
import truncateText from '@/helpers/truncateText'
import { SidebarItemProps } from '@/types/SidebarItemProps'
import Image from 'next/image'
import React from 'react'
import OnlineStatus from './OnlineStatus'

const MESSAGE_LIMIT_PREVIEW = 27

export default function SidebarItem({
    index,
    chat,
    isSidebarCollapsed
}: SidebarItemProps) {
    const chatMate = chat.participants.find((participant: any) => participant.userId !== "521d4a7e-294c-4036-8ba6-483de7b0b4e2")
    console.log("Chat: ", chat)

    const { activeChatIndex, setActiveChatIndex } = useGlobalChatContext()

    return (
        <button
            key={index}
            onClick={() => setActiveChatIndex(index)}
            className={`
                flex items-center gap-5 p-2.5
                ${isSidebarCollapsed ? 'justify-start' : 'justify-center'}  
                ${activeChatIndex === index ? 'bg-slate-200 ' : ''}
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
                    <p className='text-gray-500'>{truncateText(chat.lastMessage.content, MESSAGE_LIMIT_PREVIEW)}</p>
                </div>
            }
        </button>
    )
}
