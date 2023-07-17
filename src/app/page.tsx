'use client'
import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { socket } from '../socket'

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<any>(null)
  const [isConnected, setIsConnected] = useState(socket.connected)

  console.log("Socket: ", socket)

  useEffect(() => {
    socket.connect()
    function onConnect() {
      setIsConnected(true);
      console.log("We have connected")
    }
    const onConnectError = () => console.log("Error: ")

    function onDisconnect() {
      setIsConnected(false);
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
    const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`
    axios.get(
      loginUrl,
      { withCredentials: true }
    )
      .then(() => {
        setIsUserLoggedIn(true)
      })
      .catch(() => {
        router.push("/login")
      })
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
