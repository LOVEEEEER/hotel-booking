import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    confirmTicket,
    getTickets,
    getTicketsLoading,
    loadTickets
} from "../../../store/slices/tickets";
import Button from "../../common/Button";

const TicketList = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(getTickets());
    const ticketsLoading = useSelector(getTicketsLoading());
    useEffect(() => {
        dispatch(loadTickets());
    }, []);
    const ticketConfirm = (ticket) => {
        dispatch(confirmTicket({ ...ticket, status: "confirmed" }));
    };
    return (
        <ul className="admin__ticket-list">
            {!ticketsLoading ? (
                tickets.map((ticket) => (
                    <>
                        {ticket.status === "pending" ||
                            (ticket.status === "confirmed" && (
                                <li
                                    key={ticket._id}
                                    className="admin__ticket-item"
                                >
                                    <p className="admin__ticket-message">
                                        {ticket.name}
                                    </p>
                                    <Button
                                        // variant="outlined"
                                        className="admin__ticket-button"
                                        onClick={() => ticketConfirm(ticket)}
                                    >
                                        {ticket.status === "pending"
                                            ? "Принять тикет"
                                            : "Закрыть тикет"}
                                    </Button>
                                </li>
                            ))}
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
