import React from 'react'
import Modal from 'react-modal'
import CloseIcon from '/public/close.svg'
import SquareHoverButton from './SquareHoverButton'
import { SelectRecipientModalProps } from '@/types/SelectRecipientModalProps'
import AutoSuggestInput from './AutoSuggestInput'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '20%',
        overflow: 'none',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px'
    },
};

const SelectRecipientModal = (
    { isOpen, contentLabel, closeModal }: SelectRecipientModalProps
) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                contentLabel={contentLabel}
                ariaHideApp={false}
                style={customStyles}
            >
                <div className='font-black justify-between items-center text-lg flex'>
                    <h2>Send to</h2>
                    <SquareHoverButton
                        onClick={() => closeModal()}
                        icon={CloseIcon}
                        alt={'Close modal'}
                        buttonClassName='ml-auto block'
                    />
                </div>
                <AutoSuggestInput closeModal={closeModal} />
            </Modal>
        </>
    )
}

export default SelectRecipientModal