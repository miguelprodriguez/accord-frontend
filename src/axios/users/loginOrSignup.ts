import axios, { AxiosError } from "axios";

const loginOrSignup = async (
    {
        isLoginPage,
        data,
        router,
        setErrorMessage
    }: any
) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/users/${isLoginPage ? 'login' : 'signup'}`
        await axios.post(url, data, { withCredentials: true })
        router.push('/')
    } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        setErrorMessage(axiosError.response?.data.message || 'An error occurred.');
    }

}

export default loginOrSignup