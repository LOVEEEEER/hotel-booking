import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndPoint = "user/";

const userService = {
    fetchAll: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    createUser: async (payload) => {
        console.log(payload);
        const { data } = await httpService.put(
            userEndPoint + payload.id,
            payload
        );
        return data;
    },
    getById: async (id) => {
        const { data } = await httpService.get(userEndPoint + id);
        console.log(data);
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndPoint + localStorageService.getLocalId()
        );
        return data;
    }
};

export default userService;
