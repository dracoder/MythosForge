import StoryModule from '@/modules/StoryModule';

const StoryService = {
    fetch: async (callback = () => {}) => {
        await StoryModule.fetch()
            .then((response) => {
                callback(response.data);
            })
    },
    show: async (id, callback = () => {}) => {
        await StoryModule.show(id)
            .then((response) => {
                callback(response.data);
            })
    },
    store: async (data) => {
        return await StoryModule.store(data)
    },
    update: async (id, data) => {
        return await StoryModule.update(id, data)
    },
    destroy: async (id, callback = () => {}) => {
        await StoryModule.destroy(id)
            .then((response) => {
                callback(response.data);
            })
    }
}

export default StoryService;
