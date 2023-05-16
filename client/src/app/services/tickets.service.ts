import { AxiosResponseType, Ticket } from "./../types/types";
import httpService from "./http.service";

const ticketsEndPoint = "ticket/";

class TicketsService {
    async fetchAll() {
        const { data } = await httpService.get<AxiosResponseType<Ticket[]>>(
            ticketsEndPoint
        );
        return data;
    }

    async create(payload: Ticket) {
        console.log("ticket create");
        const { data } = await httpService.post<AxiosResponseType<null>>(
            ticketsEndPoint,
            payload
        );
        return data;
    }

    async confirm(ticketId: string, payload: Ticket) {
        const { data } = await httpService.put(
            ticketsEndPoint + ticketId,
            payload
        );
        return data;
    }

    async remove(ticketId: string) {
        const { data } = await httpService.delete(ticketsEndPoint + ticketId);
        return data;
    }
}

export default new TicketsService();
