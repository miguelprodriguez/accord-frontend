"use client"

import messagesData from '@/data/messagesData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import addFriendIcon from '/public/add-friend.svg'
import chevronLeftIcon from '/public/chevron-left.svg'
import useIsMobile from '@/hooks/useIsMobile'
import SidebarItem from './SidebarItem'
import HoverButton from './HoverButton'

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  const toggleSidebar = () => setIsSidebarCollapsed(isSidebarCollapsed => !isSidebarCollapsed)

  const isMobile = useIsMobile()
  useEffect(() => {
    if (isMobile) return setIsSidebarCollapsed(false)
    setIsSidebarCollapsed(true)
  }, [isMobile])

  return (
    <div className={`flex flex-col border-2 border-r-gray-900 h-full p-2 overflow-y-scroll`}>
      <div className="p-2 flex gap-2 justify-between items-center">
        <h1 className='font-black text-lg'>Chats</h1>
        <HoverButton
          onClick={toggleSidebar}
          icon={chevronLeftIcon}
          alt='Toggle sidebar to left'
          className={`transition duration-300 ease-in-out ${isSidebarCollapsed ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>
      <div className="p-2 flex gap-2 justify-between items-center">
        <h1 className='font-black text-lg'>Add Friend</h1>
        <HoverButton
          onClick={toggleSidebar}
          icon={addFriendIcon}
          alt='Add friend to your list'
        />
      </div>
      {messagesData.map((data, index) => {
        return (
          <SidebarItem
            key={index}
            index={index}
            data={data}
            isSidebarCollapsed={isSidebarCollapsed}
          />
        )
      })}
    </div>
  )
}