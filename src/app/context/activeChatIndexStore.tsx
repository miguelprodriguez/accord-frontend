'use client'
import { createContext, useContext, useState } from "react";

type ActiveChatIndex = {
    activeChatIndex: number,
    setActiveChatIndex: (value: number) => void
}

const defaultValue = {
    activeChatIndex: 0,
    setActiveChatIndex: (value: number) => { }
}
const ActiveChatIndexContext = createContext<ActiveChatIndex>(defaultValue)

export const ActiveChatIndexProvider = ({ children }: any) => {
    const [activeChatIndex, setActiveChatIndex] = useState(0)
    console.log("Active chat index: ", activeChatIndex)

    return (
        <ActiveChatIndexContext.Provider value={{ activeChatIndex, setActiveChatIndex }}>
            {children}
        </ActiveChatIndexContext.Provider>
    )
}

export const useActiveChatIndexContext = () => useContext(ActiveChatIndexContext)