import { toast } from 'react-toastify';
import { register } from '../services/authServices';


export const handleRegister = async (data) => {
    try {
        const response = await register(data);
        // console.log(2222);
        console.log(response);
        toast(response.message);
    } catch (error) {
        // console.log(error);
        toast(error.message);
    };
}

export const handleLogin = () => {
    try {
        if (dataResponse) {
            // console.log(1111);
            toast(dataResponse.message);
        } else {
            toast(dataResponse.message);
        }
    } catch (error) {
        throw error;
    }
}

