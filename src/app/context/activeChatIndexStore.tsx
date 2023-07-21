'use client'
import { createContext, useContext, useState } from "react";

type ActiveChatIndex = {
    activeChatIndex: number | null,
    setActiveChatIndex: (value: number | null) => void
}

const defaultValue = {
    activeChatIndex: 0,
    setActiveChatIndex: (value: number | null) => { }
}
const ActiveChatIndexContext = createContext<ActiveChatIndex>(defaultValue)

export const ActiveChatIndexProvider = ({ children }: any) => {
    const [activeChatIndex, setActiveChatIndex] = useState<number | null>(null)

    return (
        <ActiveChatIndexContext.Provider value={{ activeChatIndex, setActiveChatIndex }}>
            {children}
        </ActiveChatIndexContext.Provider>
    )
}

export const useActiveChatIndexContext = () => useContext(ActiveChatIndexContext)