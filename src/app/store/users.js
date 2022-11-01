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

export const getIsLoading = () => (state) => state.users.isLoading;

export default usersReducer;
