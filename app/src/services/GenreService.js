import GenreModule from '@/modules/GenreModule';

const GenreService = {
    fetch: async (callback = () => {}) => {
        await GenreModule.fetch()
            .then((response) => {
                callback(response.data);
            })
    },
    show: async (id, callback = () => {}) => {
        await GenreModule.show(id)
            .then((response) => {
                callback(response.data);
            })
    },
    store: async (data) => {
        return await GenreModule.store(data)
    },
    update: async (id, data) => {
        return await GenreModule.update(id, data)
    },
    destroy: async (id, callback = () => {}) => {
        await GenreModule.destroy(id)
            .then((response) => {
                callback(response.data);
            })
    }
}

export default GenreService;
