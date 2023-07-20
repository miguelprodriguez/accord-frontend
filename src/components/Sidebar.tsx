"use client"

import React, { useEffect, useState } from 'react'
import newMessageIcon from '/public/new-message.svg'
import chevronLeftIcon from '/public/chevron-left.svg'
import useIsMobile from '@/hooks/useIsMobile'
import SidebarItem from './SidebarItem'
import SquareHoverButton from './SquareHoverButton'
import SelectRecipientModal from './SelectRecipientModal'
import axios from 'axios'
import CircleImage from './CircleImage'
import { useUserContext } from '@/app/context/userStore'

export default function Sidebar() {

  const { currentUser } = useUserContext()
  const [chatsList, setChatsList] = useState([])
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

  useEffect(() => {
    const getChatsList = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chats`
        const response = await axios.get(url, { withCredentials: true })
        setChatsList(response.data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    getChatsList()
  }, [])

  return (
    <div className={`flex flex-col border-2 border-r-gray-900 h-full p-2 overflow-y-scroll`}>
      <div className="p-2 flex gap-2 justify-between items-center">
        <CircleImage src={currentUser?.image!} alt='You' />
        <h1 className='font-black text-lg'>Chats</h1>
        <div className="flex gap-2">
          <SquareHoverButton
            onClick={openModal}
            icon={newMessageIcon}
            alt='Add friend to your list'
          />
          <SquareHoverButton
            onClick={toggleSidebar}
            icon={chevronLeftIcon}
            alt='Toggle sidebar to left'
            iconClassName={`transition duration-300 ease-in-out ${isSidebarCollapsed ? 'rotate-0' : 'rotate-180'}`}
          />
        </div>
      </div>
      <SelectRecipientModal
        isOpen={isModalOpen}
        contentLabel="Example Modal"
        closeModal={closeModal}
      />
      {chatsList.map((chat, index) => {
        return (
          <SidebarItem
            key={index}
            index={index}
            chat={chat}
            isSidebarCollapsed={isSidebarCollapsed}
          />
        )
      })}
    </div>
  )
}