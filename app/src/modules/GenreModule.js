import axios from "@/lib/axios"

const GenreModule = {
    fetch: async () => {
        return await axios.get('/api/genres');
    },
    show: async (id) => {
        return await axios.get('/api/genres/' + id);
    },
    store: async (data) => {
        return await axios.post('/api/genres', data);
    },
    update: async (id, data) => {
        return await axios.put('/api/genres/' + id, data);
    },
    destroy: async (id) => {
        return await axios.delete('/api/genres/' + id);
    }
}

export default GenreModule;
