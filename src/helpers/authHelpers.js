import { toast } from 'react-toastify';
import { register, login } from '../services/authServices';


export const handleRegister = async (data) => {
    try {
        const response = await register(data);
        toast(response.message);
    } catch (error) {
        toast(error.message);
    };
}

export const handleLogin = async (data) => {
    try {
        const response = await login(data);
        toast(response.message);
    } catch (error) {
        toast(error.message);
    };
}

