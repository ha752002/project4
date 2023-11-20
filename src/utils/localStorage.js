const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const setObjectLocalStorage = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object))
}
const getLocalStorage = (key) => {
    let value = localStorage.getItem(key);
    return JSON.parse(value);
}

const removeLocalStorage = (...keys) => {
    keys.forEach((key) => {
        localStorage.removeItem(key);
    })
}

export {setLocalStorage, getLocalStorage, removeLocalStorage, setObjectLocalStorage}

