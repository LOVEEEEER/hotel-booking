import React from "react";
import PropTypes from "prop-types";
import Dialog from "../../../common/Dialog";
import Button from "../../../common/Button";

const TicketWindow = ({ ticket, onRemoveTicket, ...rest }) => {
    const getCauseName = (name) => {
        switch (name) {
            case "errors":
                return "Баги";
            case "offer":
                return "Вопрос";
            case "other":
                return "Прочее";
            default:
                return name;
        }
    };

    return (
        <Dialog {...rest}>
            <div className="admin__ticket-dialog">
                <h3 className="admin__ticket-title">
                    <span className="admin__ticket-id">№{ticket._id}</span>
                </h3>
                <ul className="admin__dialog-list">
                    <li className="admin__dialog-item">
                        <span className="admin__dialog-info">
                            Имя: {ticket.name}
                        </span>
                    </li>
                    <li className="admin__dialog-item">
                        <span className="admin__dialog-info">
                            Тип: {getCauseName(ticket.cause)}
                        </span>
                    </li>
                    <li className="admin__dialog-item">
                        <p className="admin__dialog-message admin__dialog-info">
                            Сообщение: {ticket.message}
                        </p>
                    </li>
                </ul>
                <Button
                    variant="cancel"
                    onClick={() => onRemoveTicket(ticket._id)}
                >
                    Закрыть тикет
                </Button>
            </div>
        </Dialog>
    );
};

TicketWindow.propTypes = {
    ticket: PropTypes.object.isRequired,
    onRemoveTicket: PropTypes.func.isRequired
};

export default TicketWindow;
