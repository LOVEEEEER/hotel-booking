import React from "react";
import PropTypes from "prop-types";
import TicketWindow from "../../windows/TicketWindow";
import { getFormatDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import { confirmTicket, removeTicket } from "../../../../store/slices/tickets";
import { useDialog } from "../../../../hooks/useDialog";
import { useDispatch } from "react-redux";

const TicketItem = ({ ticket }) => {
    const dispatch = useDispatch();
    const { open, handleClickOpen, handleClose } = useDialog();
    const handleTicketConfirm = () => {
        dispatch(confirmTicket({ ...ticket, status: "confirmed" }));
        handleClickOpen();
    };
    const handleRemoveTicket = (ticketId) => {
        dispatch(removeTicket(ticketId));
    };
    return (
        <div>
            <div className="admin__ticket-block">
                <span className="admin__ticket-created">
                    {getFormatDate(ticket.created_at)}
                </span>
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
                            : () => handleClickOpen()
                    }
                    sx={{ width: "190px" }}
                >
                    {ticket.status === "pending"
                        ? "Принять тикет"
                        : "На рассмотрении"}
                </Button>
            </div>
            <TicketWindow
                open={open}
                onClose={handleClose}
                ticket={ticket}
                onRemoveTicket={handleRemoveTicket}
            />
        </div>
    );
};

TicketItem.propTypes = {
    ticket: PropTypes.object.isRequired
};

export default TicketItem;
