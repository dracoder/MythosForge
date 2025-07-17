import SubscriptionPlanModule from '@/modules/SubscriptionPlanModule';

const SubscriptionPlanService = {
    fetch: async (callback = () => {}) => {
        await SubscriptionPlanModule.fetch()
            .then((response) => {
                callback(response.data);
            })
    },
    show: async (id, callback = () => {}) => {
        await SubscriptionPlanModule.show(id)
            .then((response) => {
                callback(response.data);
            })
    },
    store: async (data) => {
        return await SubscriptionPlanModule.store(data)
    },
    update: async (id, data) => {
        return await SubscriptionPlanModule.update(id, data)
    },
    destroy: async (id, callback = () => {}) => {
        await SubscriptionPlanModule.destroy(id)
            .then((response) => {
                callback(response.data);
            })
    }
}

export default SubscriptionPlanService;
