import { useGlobalChatContext } from '@/app/context/store'
import truncateText from '@/helpers/truncateText'
import { SidebarItemProps } from '@/types/SidebarItemProps'
import Image from 'next/image'
import React from 'react'

const MESSAGE_LIMIT_PREVIEW = 27

export default function SidebarItem({
    index,
    data,
    isSidebarCollapsed
}: SidebarItemProps) {
    
    const { activeChatIndex, setActiveChatIndex } = useGlobalChatContext()

    return (
        <button
            key={index}
            onClick={() => setActiveChatIndex(index)}
            className={`
                flex items-center gap-5 p-2.5
                ${isSidebarCollapsed ? 'justify-start' : 'justify-center'}  
                ${activeChatIndex === index ? 'bg-slate-200 ' : ''}
                hover:bg-slate-200 rounded-xl`
            }
        >
            <div className="w-12 h-12 relative">
                <Image
                    src={data.imageURL}
                    alt={data.name}
                    fill
                    className='object-cover rounded-[50%]'
                />
            </div>
            {isSidebarCollapsed &&
                <div className='text-left'>
                    <h2 className='font-bold'>{data.name}</h2>
                    <p className='text-gray-500'>{truncateText(data.lastMessage, MESSAGE_LIMIT_PREVIEW)}</p>
                </div>
            }
        </button>
    )
}
