import React from 'react'
import Modal from 'react-modal'
import CloseIcon from '/public/close.svg'
import SquareHoverButton from './SquareHoverButton'
import addFriendField from '@/data/addFriendField'
import FormField from './FormField'
import { useForm } from 'react-hook-form'
import { AddFriendModalProps } from '@/types/AddFriendModalProps'
import { socket } from '@/socket'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '20%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px'
    },
};

const AddFriendModal = (
    { isOpen, contentLabel, closeModal }: AddFriendModalProps
) => {

    const { register, getValues, handleSubmit, formState: { errors }, setError, reset } = useForm();

    const handleClose = () => {
        closeModal()
        reset()
    }

    const onSubmit = () => {
        const friendsUsername = getValues('friendsusername')

        socket.emit('add_friend', friendsUsername, ({ errorMessage, done }: any) => {
            if (done) return closeModal()
            setError('friendsusername', { message: errorMessage })
        })
    }
    const onError = () => console.log("Error")

    return (
        <>
            <Modal
                isOpen={isOpen}
                contentLabel={contentLabel}
                ariaHideApp={false}
                style={customStyles}
            >
                <div className='font-black justify-between items-center text-lg flex'>
                    <h2>Add Friend</h2>
                    <SquareHoverButton
                        onClick={() => handleClose()}
                        icon={CloseIcon}
                        alt={'Close modal'}
                        buttonClassName='ml-auto block'
                    />
                </div>
                <form
                    className='py-2'
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <FormField
                        label={addFriendField.label}
                        register={register}
                        errors={errors}
                        validation={addFriendField.validation}
                        inputType={addFriendField.inputType}
                    />

                    <button className='hover:drop-shadow-xl rounded-xl text-white bg-violet-700 p-4'>
                        Add
                    </button>
                </form>
            </Modal>
        </>
    )
}

export default AddFriendModal