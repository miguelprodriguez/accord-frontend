import axios from "axios"

const getChatsList = async (
    setChatsList: any
) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chats`
        const response = await axios.get(url, { withCredentials: true })
        setChatsList(response.data)
    } catch (error) {
        console.log("Error: ", error)
    }
}
export default getChatsList