import httpService from "./http.service";

const feedbackEndPoint = "feedback/";

const feedbackService = {
    create: async (id, payload) => {
        const { data } = await httpService.put(feedbackEndPoint + id, payload);
        return data;
    }
};

export default feedbackService;
