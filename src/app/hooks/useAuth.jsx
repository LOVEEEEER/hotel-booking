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

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserInfo();
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
            getUserInfo();
        } catch (error) {
            console.log(error);
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
                name: name
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
        } catch (error) {
            console.log(error);
        }
    }

    const getUserInfo = async () => {
        if (localStorageService.getAccessToken()) {
            const { content } = await userService.getCurrentUser();
            setCurrentUser(content);
        }
    };
    return (
        <AuthContext.Provider value={{ signUp, signIn, currentUser, logOut }}>
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
