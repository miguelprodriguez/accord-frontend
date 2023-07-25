import { useUserContext } from '@/app/context/userStore'
import React, { useState } from 'react'

function Chat() {

  const [inputValue, setInputValue] = useState<string>()
  const [chats, setChats] = useState<any>([])

  const { currentUser } = useUserContext()

  const handleEnterButton = (event: any) => {
    if (event.key !== 'Enter') return

    handleInputChange(event)
    handleSend()
  }

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSend = () => {
    if (inputValue === '') return
    setChats((chats: any) => [...chats, inputValue])
    setInputValue('')
  }

  return (
    <div className='flex flex-col w-full p-4'>
      <div className='flex-1'>Chats</div>
      <div className='flex gap-2'>
        <input
          value={inputValue}
          onChange={event => handleInputChange(event)}
          onKeyDown={event => handleEnterButton(event)}
          className='rounded-lg p-2 bg-slate-100 w-full'
          placeholder='Place your text here'
        />
        <button
          onClick={() => handleSend()}
          className='hover:drop-shadow-xl rounded-xl text-white bg-violet-700 p-4'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat