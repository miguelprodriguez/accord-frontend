import axios from "axios"

const createChat = async (
    { senderId, recipientId, setChatsList }: any
) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chats`
        const data = { senderId: senderId, recipientId: recipientId }
        const response = await axios.post(url, data, { withCredentials: true })
        console.log("respnse: ", response)
        if (!response.data.isExisting) setChatsList(response.data.allUserChats)
        // Make chat list refresh upon receiving above response
    } catch (error) {
        console.log("Error: ", error)
    }
}

export default createChat