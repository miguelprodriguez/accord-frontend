import { useReceiverContext } from '@/app/context/chatStore';
import { useUserContext } from '@/app/context/userStore';
import createChat from '@/axios/chats/createChat';
import fetchSuggestions from '@/axios/users/fetchSuggestions';
import React, { useEffect, useState } from 'react'

const AutoSuggestInput = (
    { closeModal, setChatsList }: any
) => {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState<any[]>([])

    const { currentUser } = useUserContext()
    const { currentReceiver, setCurrentReceiver } = useReceiverContext()

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (!inputValue) return setSuggestions([])
            fetchSuggestions({ inputValue, setSuggestions });
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [inputValue]);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSelect = (user: any) => {
        closeModal()
        setCurrentReceiver(user)
    }

    useEffect(() => {
        if (currentReceiver) createChat({
            senderId: currentUser?.userId,
            recipientId: currentReceiver?.userId,
            setChatsList: setChatsList
        })
    }, [currentReceiver])

    return (
        <div className='my-2'>
            <div className='border-2 border-slate-500 focus-within:border-violet-700 flex rounded-lg gap-2 p-2'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your search query..."
                    className='outline-none w-full'
                />
            </div>
            {
                suggestions.length > 0 &&
                <ul className='mt-4 rounded-lg border-slate-500'>
                    {suggestions.map((suggestion, index) => {
                        return <li key={index}>
                            <button
                                className='hover:bg-violet-700 hover:text-white p-2 w-full rounded-lg'
                                onClick={() => handleSelect(suggestion)}
                            >
                                {suggestion?.username}
                            </button>
                        </li>
                    })}
                </ul>
            }
        </div>
    )
}

export default AutoSuggestInput