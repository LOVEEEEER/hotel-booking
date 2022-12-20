import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDialog } from "../../../../hooks/useDialog";
import {
    confirmTicket,
    getTickets,
    getTicketsLoading,
    loadTickets
} from "../../../../store/slices/tickets";
import { getFormatDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import TicketWindow from "../../dialogs/TicketWindow";

const TicketList = () => {
    const dispatch = useDispatch();
    const { open, handleClickOpen, handleClose } = useDialog();
    const tickets = useSelector(getTickets());
    const ticketsLoading = useSelector(getTicketsLoading());
    useEffect(() => {
        dispatch(loadTickets());
    }, []);
    const ticketConfirm = (ticket) => {
        dispatch(confirmTicket({ ...ticket, status: "confirmed" }));
        handleClickOpen();
    };
    return (
        <ul className="admin__ticket-list">
            {!ticketsLoading ? (
                tickets.map((ticket) => (
                    <>
                        {!(ticket.status === "closed") && (
                            <>
                                <li
                                    key={ticket._id}
                                    className="admin__ticket-item"
                                >
                                    <span className="admin__ticket-created">
                                        {getFormatDate(ticket.created_at)}
                                    </span>
                                    <p className="admin__ticket-message">
                                        {ticket.name}
                                    </p>
                                    <p className="admin__ticket-message">
                                        {ticket.email}
                                    </p>
                                    <Button
                                        variant={
                                            ticket.status === "pending"
                                                ? "contained"
                                                : "outlined"
                                        }
                                        className="admin__ticket-button"
                                        onClick={
                                            ticket.status === "pending"
                                                ? () => ticketConfirm(ticket)
                                                : () => handleClickOpen()
                                        }
                                    >
                                        {ticket.status === "pending"
                                            ? "Принять тикет"
                                            : "На рассмотрении"}
                                    </Button>
                                </li>
                                <TicketWindow
                                    open={open}
                                    onClose={handleClose}
                                    ticket={ticket}
                                />
                            </>
                        )}
                    </>
                ))
            ) : (
                <div className="admin__ticket-loader">
                    <CircularProgress />
                </div>
            )}
        </ul>
    );
};

export default TicketList;
