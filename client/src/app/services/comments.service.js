import httpService from "./http.service";

const commentsEndPoint = "comment/";

const commentsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(commentsEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(commentsEndPoint, payload);
        return data;
    },
    delete: async (commentId) => {
        const { data } = await httpService.delete(commentsEndPoint + commentId);
        return data;
    }
};

export default commentsService;
