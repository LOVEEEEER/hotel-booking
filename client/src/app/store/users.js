import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import { generateAuthError } from "../utils/generateAuthError";
import userService from "../services/user.service";
import authService from "../services/auth.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          signInError: null,
          signUpError: null,
          isLoggedIn: true,
          auth: { userId: localStorageService.getUserId() },
          error: null
      }
    : {
          entities: null,
          isLoading: true,
          signInError: null,
          signUpError: null,
          isLoggedIn: false,
          auth: null,
          error: null
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested(state, action) {
            state.isLoading = true;
        },
        usersReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        userRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        authSignInRequestFailed(state, action) {
            state.signInError = action.payload;
        },
        authSignUpRequestFailed(state, action) {
            state.signUpError = action.payload;
        },
        userDeleted(state, action) {
            state.entities = state.entities.filter(
                (user) => user._id !== action.payload
            );
        },
        userLoggedOut(state, action) {
            state.isLoggedIn = false;
            state.auth = null;
        },
        authRequestSuccess(state, action) {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        userUpdated(state, action) {
            const elementIndex = state.entities.findIndex(
                (user) => user._id === action.payload._id
            );
            state.entities[elementIndex] = action.payload;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    userRequestFailed,
    authSignInRequestFailed,
    authSignUpRequestFailed,
    usersReceived,
    authRequestSuccess,
    userLoggedOut,
    userDeleted,
    userUpdated
} = actions;

export const loadUsers = () => async (dispatch) => {
    try {
        const { content } = await userService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const signIn =
    ({ payload, redirect, navigate }) =>
    async (dispatch) => {
        const { email, password } = payload;

        try {
            const data = await authService.signIn({
                email,
                password
            });
            dispatch(authRequestSuccess({ userId: data.userId }));
            localStorageService.setTokens(data);
            console.log(redirect);
            navigate(redirect);
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(authSignInRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignInRequestFailed(error.message));
            }
        }
    };

export const signUp =
    ({ payload, navigate }) =>
    async (dispatch) => {
        try {
            const data = await authService.signUp(payload);
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
            navigate("/rooms");
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(authSignUpRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignUpRequestFailed(error.message));
            }
        }
    };

export const updateUser = (data) => async (dispatch) => {
    try {
        await userService.updateUser(data._id, data);
        dispatch(userUpdated(data));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const deleteUser = (userId) => async (dispatch) => {
    try {
        await userService.deleteUser(userId);
        dispatch(userDeleted(userId));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const getUserById = (userId) => (state) => {
    return state.users.entities.find((user) => user._id === userId);
};

export const getUsersList = () => (state) => state.users.entities;

export const getCurrentUser = () => (state) => {
    return state.users.entities && state.users.isLoggedIn
        ? state.users.entities.find(
              (user) => user._id === state.users.auth.userId
          )
        : null;
};

export const getIsLoggedIn = () => (state) => {
    return state.users.isLoggedIn;
};

export const getAuthSignInError = () => (state) => state.users.signInError;
export const getAuthSignUpError = () => (state) => state.users.signUpError;

export const getIsLoading = () => (state) => state.users.isLoading;

export const getCurrentUserId = () => (state) => {
    return state.users.auth ? state.users.auth.userId : null;
};

export default usersReducer;
