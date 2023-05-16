import { AxiosResponseType, Comment } from "./../types/types";
import httpService from "./http.service";

const commentsEndPoint = "comment/";

class CommentsService {
    async fetchAll() {
        const { data } = await httpService.get<AxiosResponseType<Comment[]>>(
            commentsEndPoint
        );
        return data;
    }

    async create(payload: Comment) {
        const { data } = await httpService.post<AxiosResponseType<null>>(
            commentsEndPoint,
            payload
        );
        return data;
    }

    async remove(commentId: string) {
        const { data } = await httpService.delete<AxiosResponseType<null>>(
            commentsEndPoint + commentId
        );
        return data;
    }
}

export default new CommentsService();
