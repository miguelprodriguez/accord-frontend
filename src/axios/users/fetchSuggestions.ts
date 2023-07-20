import axios from "axios";

const fetchSuggestions = async (
    { inputValue, setSuggestions }: any
) => {
    try {
        const queryLink = `${process.env.NEXT_PUBLIC_API_URL}/api/users?username=${inputValue}`
        const response = await axios.get(queryLink, { withCredentials: true });

        const suggestionsData = response.data;
        setSuggestions(suggestionsData);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}

export default fetchSuggestions