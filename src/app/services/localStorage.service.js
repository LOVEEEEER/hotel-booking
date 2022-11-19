const JWT_TOKEN = "jwt-token";
const USER_LOCAL_ID = "user-local-id";
const JWT_EXPIRES = "jwt-expires";
const JWT_REFRESH = "jwt-refresh-token";

export const setTokens = ({ idToken, localId, expiresIn, refreshToken }) => {
    const expiresInMillSec = Date.now() + expiresIn * 1000;
    localStorage.setItem(JWT_TOKEN, idToken);
    localStorage.setItem(USER_LOCAL_ID, localId);
    localStorage.setItem(JWT_EXPIRES, expiresInMillSec);
    localStorage.setItem(JWT_REFRESH, refreshToken);
};

export const getAccessToken = () => {
    return localStorage.getItem(JWT_TOKEN);
};

export const getRefreshToken = () => {
    return localStorage.getItem(JWT_REFRESH);
};

export const getLocalId = () => {
    return localStorage.getItem(USER_LOCAL_ID);
};

export const getJwtExpires = () => {
    return localStorage.getItem(JWT_EXPIRES);
};

export const removeUserData = () => {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(USER_LOCAL_ID);
    localStorage.removeItem(JWT_EXPIRES);
};

export default {
    setTokens,
    getAccessToken,
    getLocalId,
    getJwtExpires,
    removeUserData,
    getRefreshToken
};
