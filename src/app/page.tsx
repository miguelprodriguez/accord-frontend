'use client'
import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean | null>(null)
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
  }, [])

  return (
    <>
      {
        !isUserLoggedIn
          ? ''
          : (
            <div className="flex h-full">
              <Sidebar />
              <Chat />
            </div>
          )
      }
    </>
  )
}
