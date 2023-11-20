const storage = window.localStorage;

export const saveStorage = (key: string, value: any) => {
    storage.setItem(key, value);
}

export const getStorage = (key: string) => {
    return storage.getItem(key);
}