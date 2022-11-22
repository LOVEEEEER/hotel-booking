import httpService from "./http.service";

const commentsEndPoint = "comment/";

const commentsService = {
    get: async (pageId) => {
        const { data } = await httpService.get(commentsEndPoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        });
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(commentsEndPoint + id, payload);
        return data;
    },
    delete: async (commentId) => {
        const { data } = await httpService.delete(commentsEndPoint + commentId);
        return data;
    }
};

export default commentsService;
