import httpService from "./http.service";

const ticketEndPoint = "ticket/";

const ticketService = {
    fetchAll: async () => {
        const { data } = await httpService.get(ticketEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(ticketEndPoint, payload);
        return data;
    },
    confirm: async (id, payload) => {
        const { data } = await httpService.put(ticketEndPoint + id, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(ticketEndPoint + id);
        return data;
    }
};

export default ticketService;
