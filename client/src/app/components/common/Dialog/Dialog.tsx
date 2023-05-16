import React from "react";
import { Dialog as DialogMUI } from "@mui/material";

type DialogProps = {
    children: React.ReactNode;
    onClose: () => void;
    open: boolean;
};

const Dialog: React.FC<DialogProps> = ({ open, children, onClose }) => {
    return (
        <div>
            <DialogMUI {...{ open, onClose }}>{children}</DialogMUI>
        </div>
    );
};

export default Dialog;
