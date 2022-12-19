import httpService from "./http.service";

const roomsEndPoint = "room/";

const roomsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    },
    update: async (roomId, payload) => {
        const { data } = await httpService.patch(
            roomsEndPoint + roomId,
            payload
        );
        return data;
    }
};

export default roomsService;
