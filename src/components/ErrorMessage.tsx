import React from 'react'

const ErrorMessage = ({
    text
}: {
    text: string
}) => {
    return (
        <h5 className='w-full bg-red-500 text-white rounded-lg p-4 my-4 text-center'>{text}</h5>
    )
}

export default ErrorMessage