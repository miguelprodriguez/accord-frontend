import axios from "axios"

const createChat = async (
    senderId: string | undefined,
    recipientId: string | undefined
) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chats`
        const data = { senderId: senderId, recipientId: recipientId }
        const response = await axios.post(url, data, { withCredentials: true })
    } catch (error) {
        console.log("Error: ", error)
    }
}

export default createChat