import api from "../api"

const key = "2a1756ded94fedab1ea64b5b62ea66f1"

const getAll = async (): Promise<any> => {
    const response = await api.get("movie/now_playing", {
        params: {
            api_key: key,
            page: 1
        }
    })
    return response

}

const getById = async (id: string | undefined): Promise<any> => {
    const response = await api.get(`/movie/${id}`, {
        params: {
            api_key: key
        }
    })

    return response

}

export const TmdbService = {
    getAll,
    getById
}