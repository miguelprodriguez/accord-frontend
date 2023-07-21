import axios from "axios"

const createChat = async (
    { senderId, recipientId, setChatsList, setActiveChatIndex }: any
) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chats`
        const data = { senderId: senderId, recipientId: recipientId }
        const response = await axios.post(url, data, { withCredentials: true })

        if (!response.data.isExisting) setChatsList(response.data.allUserChats)
        setActiveChatIndex(response.data.id)
    } catch (error) {
        console.log("Error: ", error)
    }
}

export default createChat