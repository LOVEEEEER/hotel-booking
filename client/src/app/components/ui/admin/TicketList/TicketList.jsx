import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTickets,
    getTicketsLoading,
    loadTickets
} from "../../../../store/slices/tickets";
import TicketItem from "../TicketItem";

const TicketList = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(getTickets());
    const ticketsLoading = useSelector(getTicketsLoading());
    useEffect(() => {
        dispatch(loadTickets());
    }, []);
    return (
        <ul className="admin__ticket-list">
            {!ticketsLoading ? (
                <>
                    {tickets.length > 0 ? (
                        tickets.map((ticket) => (
                            <li key={ticket._id} className="admin__ticket-item">
                                <TicketItem ticket={ticket} />
                            </li>
                        ))
                    ) : (
                        <p className="booking__error-message">
                            Список тикетов пуст
                        </p>
                    )}
                </>
            ) : (
                <div className="admin__ticket-loader">
                    <CircularProgress />
                </div>
            )}
        </ul>
    );
};

export default TicketList;
