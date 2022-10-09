import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndPoint;

axios.interceptors.request.use(
    function (res) {
        if (config.isFireBase) {
            const containSlash = /\/$/g.test(res.url);
            res.url = (containSlash ? res.url.slice(-1) : res.url) + ".json";
            return res;
        }
        return res;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

function transformData(data) {
    return Object.keys(data).map((key) => ({ ...data[key] }));
}

axios.interceptors.response.use(
    function (res) {
        res.data = { content: transformData(res.data) };
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    get: axios.get,
    put: axios.put
};

export default httpService;