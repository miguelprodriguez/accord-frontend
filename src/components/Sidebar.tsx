"use client"

import messagesData from '@/data/messagesData'
import React, { useEffect, useState } from 'react'
import addFriendIcon from '/public/add-friend.svg'
import chevronLeftIcon from '/public/chevron-left.svg'
import useIsMobile from '@/hooks/useIsMobile'
import SidebarItem from './SidebarItem'
import SquareHoverButton from './SquareHoverButton'
import AddFriendModal from './AddFriendModal'

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarCollapsed(isSidebarCollapsed => !isSidebarCollapsed)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const isMobile = useIsMobile()
  useEffect(() => {
    if (isMobile) return setIsSidebarCollapsed(false)
    setIsSidebarCollapsed(true)
  }, [isMobile])


  return (
    <div className={`flex flex-col border-2 border-r-gray-900 h-full p-2 overflow-y-scroll`}>
      <div className="p-2 flex gap-2 justify-between items-center">
        <h1 className='font-black text-lg'>Chats</h1>
        <SquareHoverButton
          onClick={toggleSidebar}
          icon={chevronLeftIcon}
          alt='Toggle sidebar to left'
          iconClassName={`transition duration-300 ease-in-out ${isSidebarCollapsed ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>
      <div className="p-2 flex gap-2 justify-between items-center">
        <h2 className='font-black text-md'>Add Friend</h2>
        <SquareHoverButton
          onClick={openModal}
          icon={addFriendIcon}
          alt='Add friend to your list'
        />
      </div>
      <AddFriendModal
        isOpen={isModalOpen}
        contentLabel="Example Modal"
        closeModal={closeModal}
      />
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