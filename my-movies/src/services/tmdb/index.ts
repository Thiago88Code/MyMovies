import api from "../api"


const apiKey = "API_KEY"

const getAll = async (): Promise<any> => {
    const response = await api.get("movie/now_playing", {
        params: {
            api_key: apiKey,
            page: 1
        }
    })
    return response

}

const getById = async (id: string | undefined): Promise<any> => {
    const response = await api.get(`/movie/${id}`, {
        params: {
            api_key: apiKey
        }
    })

    return response

}

export const TmdbService = {
    getAll,
    getById
}