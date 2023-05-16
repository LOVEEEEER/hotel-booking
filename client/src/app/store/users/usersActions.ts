import { LoginType, RegisterType, User } from "./../../types/types";
import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import usersService from "../../services/users.service";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import { generateAuthError } from "../../utils/generateAuthError";
import { userLoggedOut } from "./usersSlice";

export const loadUsersList = createAsyncThunk(
    "users/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await usersService.fetchAll();
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "users/loggedIn",
    async ({ payload, redirect, navigate }: LoginType, thunkAPI) => {
        const { email, password } = payload;

        try {
            const data = await authService.login(email, password);
            navigate(redirect);

            localStorageService.setTokens(data);
            return { userId: data.userId };
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                thunkAPI.rejectWithValue(generateAuthError(message));
            } else {
                thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);

export const register = createAsyncThunk(
    "users/registered",
    async ({ payload, navigate }: RegisterType, thunkAPI) => {
        try {
            const data = await authService.register(payload);
            localStorageService.setTokens(data);
            navigate("/rooms");
            return { userId: data.userId };
        } catch (error) {
            const { message, code } = error.response.data.error;

            if (code === 400) {
                thunkAPI.rejectWithValue(generateAuthError(message));
            } else {
                thunkAPI.rejectWithValue(generateAuthError(message));
            }
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updated",
    async (payload: User, thunkAPI) => {
        try {
            await usersService.updateUser(payload._id!, payload);
            return payload;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = () => (dispatch: Dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const removeUser = createAsyncThunk(
    "users/removed",
    async (userId: string, thunkAPI) => {
        try {
            await usersService.removeUser(userId);
            return userId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
