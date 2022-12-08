import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndPoint = "user/";

const userService = {
    fetchAll: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    createUser: async (payload) => {
        const { data } = await httpService.put(
            userEndPoint + payload.id,
            payload
        );
        return data;
    },
    updateUser: async (id, payload) => {
        const { data } = await httpService.put(userEndPoint + id, payload);
        return data;
    },
    deleteUser: async (id) => {
        const data = await httpService.delete(userEndPoint + id);
        return data;
    }
};

export default userService;
