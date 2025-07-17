import axios from "@/lib/axios"

const AuthModule = {
    login: async (data) => {
        return await axios.post('/api/login', data);
    },
    register: async (data) => {
        return await axios.post('/api/register', data);
    },
    recoverPassword: async (data) => {
        return await axios.post('/api/recover-password', data);
    },
    resetPassword: async (data) => {
        return await axios.post('/api/reset-password', data);
    },
    // authenticated
    getProfile: async () => {
        return await axios.get('/api/me');
    },
    updateProfile: async (data) => {
        return await axios.put('/api/me', data);
    },
    updatePassword: async (data) => {
        return await axios.post('/api/me/update-password', data);
    },
    logout: async () => {
        return await axios.post('/api/logout');
    },
}

export default AuthModule;
