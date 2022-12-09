import httpService from "./http.service";

const bookingEndPoint = "booking/";

const bookingService = {
    add: async (payload) => {
        const { data } = await httpService.post(bookingEndPoint, payload);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(bookingEndPoint);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(bookingEndPoint + id);
        return data;
    }
};

export default bookingService;
