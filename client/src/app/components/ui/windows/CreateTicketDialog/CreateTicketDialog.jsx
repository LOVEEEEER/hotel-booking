import React from "react";
import Dialog from "../../../common/Dialog";
import CreateTicketForm from "../../forms/CreateTicketForm";
import FormCardStyles from "../../HOC/FormCardStyles";

const CreateTicketDialog = ({ ...rest }) => {
    return (
        <Dialog {...rest}>
            <FormCardStyles>
                <h3 className="room-booking__dialog-title">Создание тикета</h3>
                <CreateTicketForm forDialog={true} />
            </FormCardStyles>
        </Dialog>
    );
};

export default CreateTicketDialog;
