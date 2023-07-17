const signupFields = [
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
                value: 4,
                message: "Your password must contain between 4 and 60 characters."
            },
            maxLength: {
                value: 60,
                message: "Your password must contain between 4 and 60 characters."
            }
        },
        inputType: 'password'
    }
]

export default signupFields