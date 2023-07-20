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
  const [selectedRecipient, setSelectedRecipient] = useState<any>(null)
  // const [isConnected, setIsConnected] = useState(socket.connected)
  const { setCurrentUser } = useUserContext()

  useEffect(() => {
    socket.connect()
    function onConnect() {
      // setIsConnected(true);
      console.log("We have connected")
    }
    const onConnectError = () => console.log("Error: ")

    function onDisconnect() {
      // setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('connect_error', onConnectError);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  const router = useRouter()

  useEffect(() => {
    checkIfLoggedIn({ setIsUserLoggedIn, setCurrentUser, router })
  }, [router])

  return (
    <>
      {
        isUserLoggedIn
          ? (
            <div className="flex h-full">
              <Sidebar />
              <Chat />
            </div>
          )
          : ''
      }
    </>
  )
}
