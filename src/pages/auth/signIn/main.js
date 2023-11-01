import { login } from '../../../services/authServices';
import { toast } from 'react-toastify';


export const handleLogin = async (data) => {
    try {
        const dataResponse = await login(data);
        if (dataResponse && dataResponse.message) {
            toast(dataResponse.message);
        } else {
            toast(dataResponse.message);
        }
    } catch (error) {
        toast(error.message);
        throw error;
    };
}