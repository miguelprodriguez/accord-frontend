// UserContext.js
'use client'
import { createContext, useState, useContext } from 'react';

type User = {
    username: string,
    userId: string,
    image: string
}

interface UserContextProps {
    currentUser: User | null,
    setCurrentUser: (value: User | null) => void
}

const UserContext = createContext<UserContextProps>({
    currentUser: null,
    setCurrentUser: () => { }
});

export function UserContextProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    console.log("Current user: ", currentUser)

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext)