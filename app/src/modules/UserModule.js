import axios from "@/lib/axios"

const UserModule = {
    fetch: async () => {
        return await axios.get('/api/users');
    },
    show: async (id) => {
        return await axios.get('/api/users/' + id);
    },
    store: async (data) => {
        return await axios.post('/api/users', data);
    },
    update: async (id, data) => {
        return await axios.put('/api/users/' + id, data);
    },
    destroy: async (id) => {
        return await axios.delete('/api/users/' + id);
    }
}

export default UserModule;
