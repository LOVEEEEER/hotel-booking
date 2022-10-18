import httpService from "./http.service";

const commentEndPoint = "comment/";

const commentService = {
    get: async (pageId) => {
        const { data } = await httpService.get(commentEndPoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        });
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(commentEndPoint + id, payload);
        return data;
    }
};

export default commentService;
