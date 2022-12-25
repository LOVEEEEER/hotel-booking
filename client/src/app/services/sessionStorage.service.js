export function toSessionStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export function fromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

const sessionStorageService = {
    toSessionStorage,
    fromSessionStorage
};

export default sessionStorageService;
