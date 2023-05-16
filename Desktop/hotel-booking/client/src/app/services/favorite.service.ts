import { AxiosResponseType, Favorite } from "./../types/types";
import httpService from "./http.service";

const favoriteEndPoint = "favorite/";

class FavoriteService {
    async fetchAll() {
        const { data } = await httpService.get<AxiosResponseType<Favorite[]>>(
            favoriteEndPoint
        );
        return data;
    }

    async create(payload: Favorite) {
        const { data } = await httpService.post<AxiosResponseType<null>>(
            favoriteEndPoint,
            payload
        );
        return data;
    }

    async remove(favoriteId: string) {
        const { data } = await httpService.delete<AxiosResponseType<null>>(
            favoriteEndPoint + favoriteId
        );
        return data;
    }
}

export default new FavoriteService();
