const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
const setObjectLocalStorage = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object))
}
const getLocalStorage = (key) => {
    return localStorage.getItem(key);
}
const getObjectLocalstorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const removeLocalStorage = (...keys) => {
    keys.forEach((key) => {
        localStorage.removeItem(key);
    })
}

export {setLocalStorage, getLocalStorage, removeLocalStorage, setObjectLocalStorage}

