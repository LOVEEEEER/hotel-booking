import { User } from "../../types/types";
import { RootState } from "../createStore";

export const getUserById = (userId: User["_id"]) => (state: RootState) => {
    return state.users.entities
        ? state.users.entities.find((user) => user._id === userId)
        : null;
};

export const getUsersList = () => (state: RootState) => state.users.entities;

export const getCurrentUser = () => (state: RootState) => {
    return state.users.isLoggedIn
        ? state.users.entities.find(
              (user) => user._id === state.users.auth!.userId
          )
        : null;
};

export const getIsLoggedIn = () => (state: RootState) => {
    return state.users.isLoggedIn;
};

export const getUserBookingCount = (userId: string) => (state: RootState) => {
    return state.booking.entities
        ? state.booking.entities.filter((booking) => booking.userId === userId)
              .length
        : null;
};

export const getUsersLoadingStatus = () => (state: RootState) =>
    state.users.isLoading;

export const getAuthLoginError = () => (state: RootState) =>
    state.users.loginError;
export const getAuthRegisterError = () => (state: RootState) =>
    state.users.registerError;

export const getIsLoading = () => (state: RootState) => state.users.isLoading;

export const getCurrentUserId = () => (state: RootState) => {
    return state.users.auth ? state.users.auth.userId : null;
};
