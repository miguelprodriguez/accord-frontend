const addFriendField = {
    label: "Username of your friend",
    validation: {
        required: "Username is required", maxLength: {
            value: 20,
            message: "The username is too long."
        }
    },
    inputType: 'text'
}

export default addFriendField