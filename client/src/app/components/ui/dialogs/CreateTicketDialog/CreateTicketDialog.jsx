import React from "react";
import Dialog from "../../../common/Dialog";
import CreateTicketForm from "../../forms/CreateTicketForm";

const CreateTicketDialog = ({ ...rest }) => {
    return (
        <Dialog {...rest}>
            <div className="create-ticket-dialog">
                <h3 className="room-booking__dialog-title">Создание тикета</h3>
                <CreateTicketForm forDialog={true} />
            </div>
        </Dialog>
    );
};

export default CreateTicketDialog;
