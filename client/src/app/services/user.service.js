import httpService from "./http.service";

const userEndPoint = "user/";

const userService = {
    fetchAll: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    updateUser: async (id, payload) => {
        console.log("id", id);
        const { data } = await httpService.patch(userEndPoint + id, payload);
        return data;
    },
    deleteUser: async (id) => {
        const data = await httpService.delete(userEndPoint + id);
        return data;
    }
};

export default userService;
