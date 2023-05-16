import { AxiosResponseType } from "./../types/types";
import { Booking } from "../types/types";
import httpService from "./http.service";

const bookingEndPoint = "booking/";

class BookingService {
    async fetchAll() {
        const { data } = await httpService.get<AxiosResponseType<Booking[]>>(
            bookingEndPoint
        );
        return data;
    }

    async create(payload: Booking) {
        const { data } = await httpService.post<AxiosResponseType<null>>(
            bookingEndPoint,
            payload
        );
        return data;
    }

    async remove(bookingId: string) {
        const { data } = await httpService.delete<AxiosResponseType<null>>(
            bookingEndPoint + bookingId
        );
        return data;
    }
}

export default new BookingService();
