import {
    AuthResponse,
    AxiosResponseType,
    RegisterUserData
} from "./../types/types";
import axios from "axios";
import config from "../configs/config.json";
import localStorageService from "./localStorage.service";

const httpAuth = axios.create({
    baseURL: config.apiEndPoint + "auth/"
});

class AuthService {
    async register(payload: RegisterUserData) {
        const { data } = await httpAuth.post<AuthResponse>("signUp", payload);
        return data;
    }

    async login(email: string, password: string) {
        const { data } = await httpAuth.post<AuthResponse>(
            "signInWithPassword",
            {
                email,
                password,
                returnSecureToken: true
            }
        );
        return data;
    }

    async refreshToken() {
        const { data } = await httpAuth.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
}

export default new AuthService();
