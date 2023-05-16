import React from "react";
import { Room } from "../../../../types/types";
import Dialog from "../../../common/Dialog";
import EditRoomForm from "../../forms/EditRoomForm";
import FormCardStyles from "../../hoc/FormCardStyles";

type EditRoomDialogProps = {
    room: Room;
    open: boolean;
    onClose: () => void;
};

const EditRoomDialog: React.FC<EditRoomDialogProps> = ({ room, ...rest }) => {
    return (
        <Dialog {...rest}>
            <FormCardStyles>
                <h1 className="form-title">Редактирование номера</h1>
                <EditRoomForm {...{ room }} />
            </FormCardStyles>
        </Dialog>
    );
};

export default EditRoomDialog;
