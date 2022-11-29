import httpService from "./http.service";

const favoritesEndPoint = "favorites/";

const favoritesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(favoritesEndPoint);
        return data;
    },
    create: async (id, payload) => {
        const { content } = await httpService.put(
            favoritesEndPoint + id,
            payload
        );
        return content;
    }
};

export default favoritesService;
