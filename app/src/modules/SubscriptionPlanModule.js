import axios from "@/lib/axios"

const GenreModule = {
    fetch: async () => {
        return await axios.get('/api/subscription_plans');
    },
    show: async (id) => {
        return await axios.get('/api/subscription_plans/' + id);
    },
    store: async (data) => {
        return await axios.post('/api/subscription_plans', data);
    },
    update: async (id, data) => {
        return await axios.put('/api/subscription_plans/' + id, data);
    },
    destroy: async (id) => {
        return await axios.delete('/api/subscription_plans/' + id);
    }
}

export default GenreModule;
