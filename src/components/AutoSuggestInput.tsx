import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AutoSuggestInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState<any[]>([])

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const queryLink = `${process.env.NEXT_PUBLIC_API_URL}/api/users?username=${inputValue}`
                const response = await axios.get(queryLink);

                const suggestionsData = response.data;
                setSuggestions(suggestionsData);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        const debounceTimeout = setTimeout(() => {
            if (!inputValue) return setSuggestions([])
            fetchSuggestions();
        }, 300);

        // Clear debounce
        return () => clearTimeout(debounceTimeout);
    }, [inputValue]);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='my-2'>
            <div className='border-2 border-slate-500 focus-within:border-violet-700 flex rounded-lg gap-2 p-2'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your search query..."
                    className='outline-none w-full'
                />
            </div>
            {
                suggestions.length > 0 &&
                <ul className='mt-4 rounded-lg border-slate-500'>
                    {suggestions.map((suggestion, index) => {
                        return <li className='hover:bg-violet-700 hover:text-white p-2 w-full rounded-lg' key={index}>
                            {suggestion?.username}
                        </li>
                    })}
                </ul>
            }
        </div>
    )
}

export default AutoSuggestInput