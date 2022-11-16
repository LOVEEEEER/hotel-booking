import httpService from "./http.service";

const bookingEndPoint = "booking/";

const bookingService = {
    add: async (id, payload) => {
        const { data } = await httpService.put(bookingEndPoint + id, payload);
        return data;
    },
    getUserBooking: async (userId) => {
        const { data } = await httpService.get(bookingEndPoint, {
            params: {
                orderBy: '"user"',
                equalTo: `"${userId}"`
            }
        });
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(bookingEndPoint + id);
        return data;
    }
};

export default bookingService;
