import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../store/createStore";
import CircularProgress from "../../../../common/CircularProgress";
import TicketCard from "../TicketCard";
import {
    getTicketsList,
    getTicketsLoadingStatus
} from "../../../../../store/tickets/ticketsSelectors";
import { loadTicketsList } from "../../../../../store/tickets/ticketsActions";

const TicketsList = () => {
    const dispatch = useAppDispatch();
    const tickets = useSelector(getTicketsList());
    const ticketsLoading = useSelector(getTicketsLoadingStatus());
    useEffect(() => {
        dispatch(loadTicketsList());
    }, []);
    return (
        <ul className="admin__ticket-list">
            {!ticketsLoading ? (
                <>
                    {tickets.length > 0 ? (
                        tickets.map((ticket) => (
                            <li key={ticket._id} className="admin__ticket-item">
                                <TicketCard ticket={ticket} />
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

export default TicketsList;
