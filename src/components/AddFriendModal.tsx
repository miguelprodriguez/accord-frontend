import React, { MouseEventHandler } from 'react'
import Modal from 'react-modal'
import CloseIcon from '/public/close.svg'
import SquareHoverButton from './SquareHoverButton'

interface AddFriendModalProps {
    isOpen: boolean,
    contentLabel?: string,
    closeModal: MouseEventHandler<HTMLButtonElement>,
}

const AddFriendModal = (
    { isOpen, contentLabel, closeModal }: AddFriendModalProps
) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                contentLabel={contentLabel}
                ariaHideApp={false}
            >
                <SquareHoverButton
                    onClick={closeModal}
                    icon={CloseIcon}
                    alt={'Close modal'}
                    buttonClassName='ml-auto block'
                />
            </Modal>
        </>
    )
}

export default AddFriendModal