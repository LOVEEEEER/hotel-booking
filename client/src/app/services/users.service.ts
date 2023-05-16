import { AxiosResponse } from "axios";
import { AxiosResponseType } from "../types/types";
import { User } from "../types/types";
import httpService from "./http.service";

const usersEndPoint = "user/";

class UsersService {
  async fetchAll() {
    const { data } = await httpService.get<AxiosResponseType<User[]>>(
      usersEndPoint
    );
    return data;
  }

  async updateUser(userId: string, payload: User) {
    const { data } = await httpService.patch<AxiosResponseType<null>>(
      usersEndPoint + userId,
      payload
    );
    return data;
  }

  async removeUser(userId: string) {
    const { data } = await httpService.delete<AxiosResponseType<null>>(
      usersEndPoint + userId
    );
  }
}

export default new UsersService();
