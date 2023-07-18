import { MouseEventHandler } from "react";

export interface AddFriendModalProps {
    isOpen: boolean,
    contentLabel?: string,
    closeModal: MouseEventHandler<HTMLButtonElement>,
}