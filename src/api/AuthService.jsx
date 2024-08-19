import axios from 'axios';

const REGISTER_API_URL = 'http://localhost:8000/api/register/';
const LOGIN_API_URL = 'http://localhost:8000/api/token/';

const register = async (username, email, nome, telefone, password, confirmPassword) => {
    try {
        const response = await axios.post(REGISTER_API_URL, {
            username,
            email,
            nome,
            telefone,
            password,
            confirm_password: confirmPassword,
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.detail || 'Registration failed');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

const login = async (username, password) => {
    try {
        const response = await axios.post(LOGIN_API_URL, {
            username,
            password,
        });
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.detail || 'Login failed');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;