import { AxiosResponseType, Room } from "./../types/types";
import httpService from "./http.service";

const roomsEndPoint = "room/";

class RoomsService {
    async fetchAll() {
        const { data } = await httpService.get<AxiosResponseType<Room[]>>(
            roomsEndPoint
        );
        return data;
    }

    async update(roomId: string, payload: Room) {
        const { data } = await httpService.patch<AxiosResponseType<null>>(
            roomsEndPoint + roomId,
            payload
        );
        return data;
    }
}

export default new RoomsService();
