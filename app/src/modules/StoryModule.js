import axios from "@/lib/axios"

const StoryModule = {
    fetch: async () => {
        return await axios.get('/api/stories');
    },
    show: async (id) => {
        return await axios.get('/api/stories/' + id);
    },
    store: async (data) => {
        return await axios.post('/api/stories', data);
    },
    update: async (id, data) => {
        return await axios.put('/api/stories/' + id, data);
    },
    destroy: async (id) => {
        return await axios.delete('/api/stories/' + id);
    }
}

export default StoryModule;
