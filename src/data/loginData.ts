const loginData = [
    {
        label: 'Email', 
        validation: {
            required: "Email is required",
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
            }
        },
        inputType: 'text'
    }, 
    {
        label: 'Password', 
        inputType: 'password'
    }
]

export default loginData