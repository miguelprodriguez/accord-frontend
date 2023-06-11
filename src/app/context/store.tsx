'use client'

import { createContext, useContext, useState } from "react"

interface IChatContextProps {
    activeChatIndex: number | null,
    setActiveChatIndex: (value: number | null) => void
}

const ChatContext = createContext<IChatContextProps>({
    activeChatIndex: null,
    setActiveChatIndex: () => {}
})

export const GlobalChatProvider = ({children} : any) => {
    const [activeChatIndex, setActiveChatIndex] = useState<number| null>(null)

    return (
        <ChatContext.Provider value={{ activeChatIndex, setActiveChatIndex }}>
            {children}
        </ChatContext.Provider>
    )
}

export const useGlobalChatContext = () => useContext(ChatContext)