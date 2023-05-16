import React from "react";
import { Ticket } from "../../../../types/types";
import Button from "../../../common/Button";
import Dialog from "../../../common/Dialog";

type TicketDialogProps = {
    ticket: Ticket;
    onRemoveTicket: (ticketId: string) => void;
    open: boolean;
    onClose: () => void;
};

const TicketDialog: React.FC<TicketDialogProps> = ({
    ticket,
    onRemoveTicket,
    ...rest
}) => {
    const getCauseName = (name: Ticket["cause"]) => {
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
                        <span className="admin__dialog-info">
                            E-mail: {ticket.email}
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
                    onClick={() => onRemoveTicket(ticket._id || "")}
                >
                    Закрыть тикет
                </Button>
            </div>
        </Dialog>
    );
};

export default TicketDialog;
