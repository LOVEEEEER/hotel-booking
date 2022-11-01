import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import { generateAuthError } from "../utils/generateAuthError";
import userService from "../services/user.service";
import authService from "../services/auth.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: true,
          auth: { userId: localStorageService.getLocalId() }
      }
    : {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: false,
          auth: null
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
        userCreated(state, action) {
            state.entities.push(action.payload);
            state.isLoggedIn = true;
        },
        authRequestSuccess(state, action) {
            state.auth = action.payload;
            state.isLoggedIn = true;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const { userRequestFailed, userCreated, usersReceived, authRequestSuccess } =
    actions;

export const loadUsers = () => async (dispatch) => {
    try {
        const { content } = await userService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const signIn =
    ({ email, password }) =>
    async (dispatch) => {
        try {
            const data = await authService.signIn({
                email,
                password
            });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.localId }));
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(userRequestFailed(generateAuthError(message)));
            } else {
                dispatch(userRequestFailed(error.message));
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
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                dispatch(userRequestFailed(generateAuthError(message)));
            } else {
                dispatch(userRequestFailed(error.message));
            }
        }
    };

async function createUser(data) {
    const { content } = await userService.createUser(data);
    console.log(content);
    return content;
}

export const getCurrentUser = () => (state) => {
    return state.users.entities
        ? state.users.entities.find(
              (user) => user.id === state.users.auth.userId
          )
        : null;
};

export const getIsLoggedIn = () => (state) => {
    return state.users.isLoggedIn || null;
};

export const getIsLoading = () => (state) => state.users.isLoading;

export default usersReducer;
