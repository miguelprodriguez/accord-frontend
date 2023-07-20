import './globals.css'
import { UserContextProvider } from './context/userStore'
import { ReceiverProvider } from './context/chatStore'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <ReceiverProvider>
            {children}
          </ReceiverProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}
