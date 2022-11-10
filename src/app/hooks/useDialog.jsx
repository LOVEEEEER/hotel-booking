import { useState } from "react";

export const useDialog = () => {
    const [open, setOpen] = useState();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return { open, handleClickOpen, handleClose };
};
