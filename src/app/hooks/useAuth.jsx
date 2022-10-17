import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../services/user.service";
import localStorageService from "../services/localStorage.service";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const httpAuth = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserInfo();
        } else {
            setLoading(false);
        }
    }, []);

    const signIn = async ({ email, password }) => {
        try {
            const { data } = await httpAuth.post(
                "accounts:signInWithPassword",
                {
                    email,
                    password,
                    returnSecureToken: true
                }
            );
            localStorageService.setTokens(data);
            await getUserInfo();
        } catch (error) {
            const { message, code } = error.response.data.error;
            if (code === 400) {
                if (
                    message === "EMAIL_NOT_FOUND" ||
                    message === "INVALID_PASSWORD"
                ) {
                    throw new Error("E-mail или пароль введены некорректно");
                } else {
                    throw new Error();
                }
            }
        }
    };

    const signUp = async ({ email, password, name }) => {
        try {
            const { data } = await httpAuth.post("accounts:signUp", {
                email,
                password,
                returnSecureToken: true
            });
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

            createUser(newUser);
        } catch (error) {
            console.log(error);
        }
    };

    const logOut = () => {
        localStorageService.removeUserData();
        setCurrentUser(null);
    };

    async function createUser(data) {
        try {
            const { content } = await userService.createUser(data);
            setCurrentUser(content);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const getUserInfo = async () => {
        const { content } = await userService.getCurrentUser();
        setCurrentUser(content);
        setLoading(false);
    };
    return (
        <AuthContext.Provider
            value={{ signUp, signIn, currentUser, logOut, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default AuthProvider;
