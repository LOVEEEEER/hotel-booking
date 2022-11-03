import httpService from "./http.service";

const bookingEndPoint = "/booking";

const bookingService = {
    add: async (id, payload) => {
        const { data } = await httpService.put(bookingEndPoint + id, payload);
        return data;
    }
};

export default bookingService;
