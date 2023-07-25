import { useReceiverContext } from '@/app/context/receiverStore';
import { useUserContext } from '@/app/context/userStore'
import React, { useEffect, useRef, useState } from 'react'
import CircleImage from './CircleImage';

function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>('')
  const [messages, setMessages] = useState<any>([])

  const { currentUser } = useUserContext()
  const { currentReceiver } = useReceiverContext()

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
    setMessages((chats: any) => [...chats, { sender: currentUser?.username, message: inputValue }])
    setInputValue('')
  }

  useEffect(() => {
    const scrollToBottom = () => {
      if (!messagesEndRef.current) return
      const { scrollHeight, clientHeight } = messagesEndRef.current;
      messagesEndRef.current.scrollTop = scrollHeight - clientHeight;
    }

    scrollToBottom()
  }, [messages]);

  return (
    <div className='flex flex-col w-full'>
      <div className="flex p-4 gap-2 items-center border-b-2 border-slate-100">
        <CircleImage
          src={currentReceiver?.image}
          alt={'Receiver of message'}
          isOnline={false}
          isOnlineStatusShown={false}
        />
        <h2 className='font-bold'>{currentReceiver?.username}</h2>
      </div>
      <div className="overflow-auto flex-1" ref={messagesEndRef}>
        <div className="flex flex-col m-4 gap-2">
          {messages.map((chat: any, index: number) => {
            return (
              <div className={`
                ${messages[messages.length - 1].sender === currentUser?.username
                  ? 'ml-auto'
                  : 'mr-auto'
                }
                flex gap-2 items-center`}
                key={index}
              >
                <div className='p-4 rounded-full bg-violet-700 inline-block'>
                  <p className='text-white'>{chat.message}</p>
                </div>
                <CircleImage
                  src={currentUser?.image}
                  alt={'Sender of message'}
                  isOnline={false}
                  isOnlineStatusShown={false}
                />
              </div>
            )
          })}
        </div >
      </div>
      <div className='flex gap-2 p-4'>
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