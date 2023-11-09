import { object, string, boolean, ref } from "yup";

const phoneRegExp = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
const passwordRegExp = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;


export const signUpFormSchema = object({
    fullName: string().required().min(8),
    email: string().email().required(),
    isAgree: boolean().oneOf([true], 'You must accept the terms and conditions'),
    password: string().required().matches(passwordRegExp, "Password must contain an UPPERCASE, a lowercase, a number, a special character, and be at least 8 characters long"),
    reEnterPassword: string()
        .oneOf([ref('password')], "Passwords do not match")
        .required("Confirm Password Required"),
    phone: string().required().matches(phoneRegExp, "Phone number must be 10 digits long "),
});
