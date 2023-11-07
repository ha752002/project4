import { register, login } from '../services/authServices';


export const handleRegister = async (data) => {
    const response = await register(data);
    return response;
}

export const handleLogin = async (data) => {
    const response = await login(data);
    return response;
}

