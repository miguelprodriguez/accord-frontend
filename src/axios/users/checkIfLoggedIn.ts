import axios from "axios"

const checkIfLoggedIn = async (
    { setIsUserLoggedIn, setCurrentUser, router }: any
) => {
    try {
        const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`
        const response = await axios.get(loginUrl, { withCredentials: true })
        setIsUserLoggedIn(true)
        setCurrentUser(response.data)
    } catch (error) {
        router.push('/login')
    }
}

export default checkIfLoggedIn