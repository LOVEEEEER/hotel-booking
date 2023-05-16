import localStorageServiceConfig from "../constants/localStorageServiceConfig";
import { AuthResponse } from "../types/types";

const { EXPIRES_KEY, REFRESH_KEY, TOKEN_KEY, USERID_KEY } =
    localStorageServiceConfig;

export function toLocalStorage<T>(key: string, payload: T) {
    localStorage.setItem(key, JSON.stringify(payload));
}

export function fromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || "");
}

export function setTokens(data: AuthResponse) {
    const { refreshToken, accessToken, userId, expiresIn = 3600 } = data;
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate.toString());
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function removeAuthData() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    toLocalStorage,
    fromLocalStorage
};

export default localStorageService;
