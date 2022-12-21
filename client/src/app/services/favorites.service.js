import httpService from "./http.service";

const favoritesEndPoint = "favorite/";

const favoritesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(favoritesEndPoint);
        return data;
    },
    create: async (payload) => {
        const { content } = await httpService.post(favoritesEndPoint, payload);
        return content;
    },
    remove: async (roomId) => {
        const { data } = await httpService.delete(favoritesEndPoint + roomId);
        return data;
    }
};

export default favoritesService;
