import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogMUI from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Dialog = ({ open, onClickOpen, onClose }) => {
    return (
        <div>
            <DialogMUI
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Номер успешно забронирован!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Управлять забронированными отелями вы можете в разделе
                        Мои бронирования
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </DialogMUI>
        </div>
    );
};

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClickOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Dialog;
