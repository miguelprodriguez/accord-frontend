const addFriendField = {
    label: "Friend's username",
    validation: {
        required: "Username is required", maxLength: {
            value: 20,
            message: "The username is too long."
        }
    },
    inputType: 'text'
}

export default addFriendField