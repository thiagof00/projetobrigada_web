import api from 'axios'

const connectApi = api.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export default connectApi;