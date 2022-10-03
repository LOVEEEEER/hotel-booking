import httpService from "./http.service";

const roomsEndPoint = "room";

const roomsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    }
};

export default roomsService;
