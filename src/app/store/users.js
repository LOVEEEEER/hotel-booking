import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import { generateAuthError } from "../utils/generateAuthError";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          signInError: null,
          signUpError: null,
          isLoggedIn: true,
          auth: { userId: localStorageService.getLocalId() },
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
        userCreated(state, action) {
            state.entities.push(action.payload);
            state.isLoggedIn = true;
        },
        userDeleted(state, action) {
            state.entities = state.entities.filter(
                (user) => user.id !== action.payload
            );
        },
        userLoggedOut(state, action) {
            state.isLoggedIn = false;
            state.auth = null;
        },
        authRequestSuccess(state, action) {
            state.auth = action.payload;
            state.isLoggedIn = true;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    userRequestFailed,
    authSignInRequestFailed,
    authSignUpRequestFailed,
    userCreated,
    usersReceived,
    authRequestSuccess,
    userLoggedOut,
    userDeleted
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
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;

        try {
            const data = await authService.signIn({
                email,
                password
            });
            dispatch(authRequestSuccess({ userId: data.localId }));
            localStorageService.setTokens(data);
            history.push(redirect);
        } catch (error) {
            const { message, code } = error.response.data.error;
            console.log(generateAuthError(message));
            if (code === 400) {
                dispatch(authSignInRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignInRequestFailed(error.message));
            }
        }
    };

export const signUp =
    ({ email, password, name }) =>
    async (dispatch) => {
        try {
            const data = await authService.signUp({ email, password });
            localStorageService.setTokens(data);
            const newUser = {
                id: data.localId,
                email: email,
                name: name,
                image: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`,
                created_at: Date.now()
            };
            const user = await createUser(newUser);
            dispatch(authRequestSuccess({ userId: data.localId }));
            dispatch(userCreated(user));
            history.push("/rooms");
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(authSignUpRequestFailed(generateAuthError(message)));
            } else {
                dispatch(authSignUpRequestFailed(error.message));
            }
        }
    };

export const logOut = () => (dispatch) => {
    localStorageService.removeUserData();
    dispatch(userLoggedOut());
};

async function createUser(data) {
    const { content } = await userService.createUser(data);
    console.log(content);
    return content;
}

export const deleteUser = (userId) => async (dispatch) => {
    try {
        await userService.deleteUser(userId);
        dispatch(userDeleted(userId));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const getUserById = (userId) => (state) => {
    return state.users.entities.find((user) => user.id === userId);
};

export const getUsersList = () => (state) => state.users.entities;

export const getCurrentUser = () => (state) => {
    return state.users.entities && state.users.isLoggedIn
        ? state.users.entities.find(
              (user) => user.id === state.users.auth.userId
          )
        : null;
};

export const getIsLoggedIn = () => (state) => {
    return state.users.isLoggedIn || null;
};

export const getAuthSignInError = () => (state) => state.users.signInError;
export const getAuthSignUpError = () => (state) => state.users.signUpError;

export const getIsLoading = () => (state) => state.users.isLoading;

export default usersReducer;