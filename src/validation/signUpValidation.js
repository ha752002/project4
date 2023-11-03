const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
import { object, string } from "yup";


export let formSchema = object({
    fullname: string().required(),
    email: string().email(),
    phone: string().required().matches(phoneRegExp, "Phone number is not valid"),
});
