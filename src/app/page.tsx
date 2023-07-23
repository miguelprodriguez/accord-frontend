'use client'
import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { socket } from '../socket'
import { useUserContext } from "./context/userStore";
import checkIfLoggedIn from "@/axios/users/checkIfLoggedIn";

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<any>(null)
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { setCurrentUser } = useUserContext()

  const router = useRouter()

  useEffect(() => {
    checkIfLoggedIn({ setIsUserLoggedIn, setCurrentUser, router })
  }, [router])


  useEffect(() => {
    socket.connect()

    const updateOnlineUsers = (updatedUsers: any) => {
      // updatedUsers -value passed from socket io
      setOnlineUsers(updatedUsers);
    };

    socket.on('updateOnlineUsers', updateOnlineUsers);

    return () => {
      socket.off('updateOnlineUsers', updateOnlineUsers);
    };
  }, []);

  return (
    <>
      {
        isUserLoggedIn
          ? (
            <div className="flex h-full">
              <Sidebar onlineUsers={onlineUsers} />
              <Chat />
            </div>
          )
          : ''
      }
    </>
  )
}
