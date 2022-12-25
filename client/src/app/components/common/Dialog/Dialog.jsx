import React from "react";
import PropTypes from "prop-types";
import DialogMUI from "@mui/material/Dialog";

const Dialog = ({ open, onClose, children }) => {
    return (
        <div>
            <DialogMUI open={open} onClose={onClose}>
                {children}
            </DialogMUI>
        </div>
    );
};

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default Dialog;
