import { register } from '../../../services/authServices';
import { toast } from 'react-toastify';


export const handleRegister = async (data) => {
    try {
        const dataResponse = await register(data);
        console.log(2222);

        console.log(dataResponse);
        if (dataResponse) {
            console.log(1111);
            toast(dataResponse.message);
        } else {
            toast(dataResponse.message);
        }
    } catch (error) {
        throw error;
    };
}

// handleRegister(data);