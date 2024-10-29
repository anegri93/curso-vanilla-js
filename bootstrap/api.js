export const localSave = (dbName, obj) => {
    localStorage.setItem(dbName, JSON.stringify(obj));
}

export const localLoad = (dbName) => {
    return localStorage.getItem(dbName);
}