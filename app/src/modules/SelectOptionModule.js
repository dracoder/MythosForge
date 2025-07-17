import axios from "@/lib/axios"

const SelectOptionModule = {
    fetch: async (model, params = {}) => {
        return await axios.get('/api/select-options/' + model, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/json',
            },
            params: params
        })
    }
}

export default SelectOptionModule
