import { register, login } from '../services/authServices';
import { toast } from 'react-toastify';

const handleRegister = async (data) => {
    try {
        const response = await register(data);
        // console.log(signUpState);
        navigate("/user/signIn");
        toast.success(response.message);
    } catch (error) {
        toast.warn(error.message);
    }
}

const handleLogin = async (data) => {
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


export { handleRegister, handleLogin }