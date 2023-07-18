const loginFields = [
    {
        label: 'Username',
        validation: {
            required: "Username is required", maxLength: {
                value: 20,
                message: "Your username is too long."
            }
        },
        inputType: 'text'
    },
    {
        label: 'Password',
        inputType: 'password',
        validation: {
            required: "Password is required",
        },
    }
]

export default loginFields