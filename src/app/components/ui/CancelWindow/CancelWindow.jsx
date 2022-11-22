import React from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button";
import Dialog from "../../common/Dialog";

const CancelWindow = ({ onClose, onCancel, ...rest }) => {
    return (
        <Dialog onClose={onClose} {...rest}>
            <div className="booking__dialog">
                <h2 className="booking__dialog-title">
                    Вы уверены что хотите отменить бронь?
                </h2>
                <Button sx={{ marginRight: "20px" }} onClick={onCancel}>
                    Уверен
                </Button>
                <Button variant="cancel" onClick={onClose}>
                    Отменить
                </Button>
            </div>
        </Dialog>
    );
};

CancelWindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default CancelWindow;
