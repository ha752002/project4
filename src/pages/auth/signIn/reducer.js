
const reduce = (prev, action = {}) => {
    switch (action.type) {
        case "form/change":
            return {
                ...prev,
                form: { ...prev.form, [action.payload.name]: action.payload.value },
            };
    }
};

export { reduce }