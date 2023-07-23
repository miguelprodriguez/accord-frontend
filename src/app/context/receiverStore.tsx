// UserContext.js
'use client'
import { createContext, useState, useContext } from 'react';

type User = {
    username: string,
    userId: string,
    image: string
}

interface UserContextProps {
    currentReceiver: User | null,
    setCurrentReceiver: (value: User | null) => void
}

const ReceiverContext = createContext<UserContextProps>({
    currentReceiver: null,
    setCurrentReceiver: () => { }
});

export function ReceiverProvider({ children }: any) {
    const [currentReceiver, setCurrentReceiver] = useState<User | null>(null);

    return (
        <ReceiverContext.Provider value={{ currentReceiver, setCurrentReceiver }}>
            {children}
        </ReceiverContext.Provider>
    );
}

export const useReceiverContext = () => useContext(ReceiverContext)