import httpService from "./http.service";

const roomsEndPoint = "room/";

const roomsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        console.log(JSON.stringify(data.content));
        return data;
    }
};

export default roomsService;
