import { register, login } from '../services/authServices';

const handleRegister = async (data) => {
    try {
        const response = await register(data);
        // console.log(signUpState);
        return response;
    } catch (error) {
        throw Error(error.message)
    }
}

const handleLogin = async (data) => {
    try {
        const dataResponse = await login(data);
        return dataResponse;
    } catch (error) {
        throw Error(error.message)
    };
}


export { handleRegister, handleLogin }