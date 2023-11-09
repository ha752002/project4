
export const reduce = (prev, action = {}) => {
    switch (action.type) {
        case "form/change":
            return {
                ...prev,
                form: { ...prev.form, [action.payload.name]: action.payload.value },
            };

        case "agree/toggle":
            return {
                ...prev,
                form: { ...prev.form, isAgree: !prev.form.isAgree },
            };

        case "error/set":
            return {
                ...prev,
                errors: action.payload,
            };
        default:
            return prev;
    }
};