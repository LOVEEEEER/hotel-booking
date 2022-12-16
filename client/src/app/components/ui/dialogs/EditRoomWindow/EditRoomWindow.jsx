import React from "react";
import PropTypes from "prop-types";
import Dialog from "../../../common/Dialog";
import EditRoomForm from "../../forms/EditRoomForm/EditRoomForm";
import FormCardStyles from "../../HOC/FormCardStyles";

const EditRoomWindow = ({ room, ...rest }) => {
    return (
        <Dialog {...rest}>
            <FormCardStyles>
                <h1 className="form-title">Редактирование номера</h1>
                <EditRoomForm {...room} />
            </FormCardStyles>
        </Dialog>
    );
};

EditRoomWindow.propTypes = {
    room: PropTypes.object.isRequired
};

export default EditRoomWindow;
