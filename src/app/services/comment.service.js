import httpService from "./http.service";

const commentEndPoint = "comment/";

const commentService = {
    get: async (roomId) => {
        const { data } = await httpService.get(commentEndPoint);
        return data;
    },
    create: async (id, payload) => {
        httpService.put(commentEndPoint + id, payload);
    }
};

export default commentService;
