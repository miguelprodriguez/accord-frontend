const signupData = [
    {
        label: 'Username',
        validation: { required: "Username is required", maxLength: 20 },
        inputType: 'text'
    }, 
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
        validation: { 
            required: "Password is required",
            minLength: {
            value: 5,
            message: "Min length is 5"
            }
        },
        inputType: 'password'
    }
]

export default signupData