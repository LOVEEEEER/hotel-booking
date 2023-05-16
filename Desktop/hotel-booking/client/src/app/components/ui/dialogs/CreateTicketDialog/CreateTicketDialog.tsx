import React from "react";
import Dialog from "../../../common/Dialog";
import CreateTicketForm from "../../forms/CreateTicketForm";
import FormCardStyles from "../../hoc/FormCardStyles";

type CreateTicketDialogProps = {
    open: boolean;
    onClose: () => void;
};

const CreateTicketDialog: React.FC<CreateTicketDialogProps> = ({ ...rest }) => {
    return (
        <Dialog {...rest}>
            <FormCardStyles>
                <h3 className="room-booking__dialog-title">Создание тикета</h3>
                <CreateTicketForm isDialog={true} />
            </FormCardStyles>
        </Dialog>
    );
};

export default CreateTicketDialog;
