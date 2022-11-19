import axios from "axios";
import config from "../config.json";
import authService from "./auth.service";
import localStorageService from "./localStorage.service";

axios.defaults.baseURL = config.apiEndPoint;

axios.interceptors.request.use(
    async function (res) {
        if (config.isFireBase) {
            const containSlash = /\/$/g.test(res.url);
            res.url = (containSlash ? res.url.slice(0, -1) : res.url) + ".json";
            const expiresDate = localStorageService.getJwtExpires();
            const refreshToken = localStorageService.getRefreshToken();
            if (refreshToken && Date.now() > expiresDate) {
                const data = await authService.refresh();
                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    idToken: data.id_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id
                });
                const accessToken = localStorageService.getAccessToken();
                if (accessToken) {
                    config.params = { ...config.params, auth: accessToken };
                }
            }
        }
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

function transformData(data) {
    return !data.id ? Object.keys(data).map((key) => ({ ...data[key] })) : data;
}

axios.interceptors.response.use(
    function (res) {
        if (res.data === null) return res;
        if (typeof res === "object") {
            res.data = { content: transformData(res.data) };
            return res;
        }
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete
};

export default httpService;
