export function toSessionStorage<T>(key: string, data: T) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export function fromSessionStorage(key: string) {
    const storageItem = sessionStorage.getItem(key);
    if (storageItem) {
        return JSON.parse(storageItem);
    }
    return null;
}

const sessionStorageService = {
    toSessionStorage,
    fromSessionStorage
};

export default sessionStorageService;
