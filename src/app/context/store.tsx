'use client'

import { createContext, useContext, useState } from "react"

// 1. Create the context
interface ChatContextProps {
    activeChatIndex: number,
    setActiveChatIndex: (value: number) => void
}
const ChatContext = createContext<ChatContextProps>({
    activeChatIndex: 0,
    setActiveChatIndex: () => { }
})

// 2. Provide the context - check layout.txt for NextJS 
export const GlobalChatProvider = ({ children }: any) => {
    const [activeChatIndex, setActiveChatIndex] = useState<number>(0)
    console.log("Active chat Index: ", activeChatIndex)

    return (
        <ChatContext.Provider value={{ activeChatIndex, setActiveChatIndex }}>
            {children}
        </ChatContext.Provider>
    )
}

// 3. Consume the context - could be const { activeChatIndex, setActiveChatIndex } = useContext(ChatContext)
export const useGlobalChatContext = () => useContext(ChatContext)