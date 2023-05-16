import { Tab } from "@mui/material";
import axios, { InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import configFile from "../configs/config.json";
import authService from "./auth.service";
import localStorageService from "./localStorage.service";

const http = axios.create({
    baseURL: configFile.apiEndPoint
});

http.interceptors.request.use(
    async function (
        config:
            | InternalAxiosRequestConfig
            | (InternalAxiosRequestConfig & { headers: object })
    ) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && Number(expiresDate) < Date.now();

        if (isExpired) {
            const data = await authService.refreshToken();
            localStorageService.setTokens(data);
        }
        const accessToken = localStorageService.getAccessToken();
        if (accessToken) {
            config.headers = Object.assign(config.headers, {
                Authorization: `Bearer ${accessToken}`
            });
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
http.interceptors.response.use(
    (res) => {
        res.data = {
            content: res.data
        };
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};
export default httpService;
