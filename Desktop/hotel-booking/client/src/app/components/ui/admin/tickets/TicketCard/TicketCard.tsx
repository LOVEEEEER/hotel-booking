import React from "react";
import useDialog from "../../../../../hooks/useDialog";
import { useAppDispatch } from "../../../../../store/createStore";
import { Ticket } from "../../../../../types/types";
import { getFormatDate } from "../../../../../utils/dateService";
import Button from "../../../../common/Button";
import TicketDialog from "../../../dialogs/TicketDialog";
import {
    confirmTicket,
    removeTicket
} from "../../../../../store/tickets/ticketsActions";

type TicketCardProps = {
    ticket: Ticket;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
    const dispatch = useAppDispatch();
    const { open, handleOpen, handleClose } = useDialog();
    const handleTicketConfirm = () => {
        dispatch(confirmTicket({ ...ticket, status: "confirmed" }));
        handleOpen();
    };
    const handleRemoveTicket = (ticketId: string) => {
        dispatch(removeTicket(ticketId));
    };
    return (
        <div>
            <div className="admin__ticket-block">
                {ticket.created_at && (
                    <span className="admin__ticket-created">
                        {getFormatDate(ticket.created_at)}
                    </span>
                )}
                <p className="admin__ticket-text">{ticket.name}</p>
                <p className="admin__ticket-text">{ticket.email}</p>
                <Button
                    variant={
                        ticket.status === "pending" ? "contained" : "outlined"
                    }
                    className="admin__ticket-button"
                    onClick={
                        ticket.status === "pending"
                            ? () => handleTicketConfirm()
                            : () => handleOpen()
                    }
                    sx={{ width: "190px" }}
                >
                    {ticket.status === "pending"
                        ? "Принять тикет"
                        : "На рассмотрении"}
                </Button>
            </div>
            <TicketDialog
                open={open}
                onClose={handleClose}
                ticket={ticket}
                onRemoveTicket={handleRemoveTicket}
            />
        </div>
    );
};

export default TicketCard;
