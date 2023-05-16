import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import localStorageService from "../../services/localStorage.service";
import {
    loadUsersList,
    login,
    register,
    removeUser,
    updateUser
} from "./usersActions";

type UsersStateType = {
    entities: User[];
    isLoading: boolean;
    error: null | string;
    isLoggedIn: boolean;
    loginError: null | string;
    registerError: null | string;
    auth: null | { userId: User["_id"] };
};

const initialState: UsersStateType = localStorageService.getAccessToken()
    ? {
          entities: [],
          isLoading: true,
          error: null,
          isLoggedIn: true,
          loginError: null,
          registerError: null,
          auth: { userId: localStorageService.getUserId()! }
      }
    : {
          entities: [],
          isLoading: true,
          error: null,
          isLoggedIn: false,
          loginError: null,
          registerError: null,
          auth: null
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.auth = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadUsersList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadUsersList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadUsersList.fulfilled.type,
            (state, action: PayloadAction<User[]>) => {
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            login.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.loginError = action.payload;
            }
        );
        builder.addCase(
            login.fulfilled.type,
            (state, action: PayloadAction<UsersStateType["auth"]>) => {
                state.auth = action.payload;
                state.loginError = null;
                state.isLoggedIn = true;
            }
        );
        builder.addCase(
            register.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.registerError = action.payload;
            }
        );
        builder.addCase(
            register.fulfilled.type,
            (state, action: PayloadAction<UsersStateType["auth"]>) => {
                state.auth = action.payload;
                state.registerError = null;
                state.isLoggedIn = true;
            }
        );
        builder.addCase(
            updateUser.fulfilled.type,
            (state, action: PayloadAction<User>) => {
                const elementIndex = state.entities.findIndex(
                    (user) => user._id === action.payload._id
                );
                state.entities[elementIndex] = action.payload;
            }
        );
        builder.addCase(
            removeUser.fulfilled.type,
            (state, action: PayloadAction<User["_id"]>) => {
                state.entities = state.entities.filter(
                    (user) => user._id !== action.payload
                );
            }
        );
    }
});

const {
    reducer: usersReducer,
    actions: { userLoggedOut }
} = usersSlice;

export { userLoggedOut };
export default usersReducer;
