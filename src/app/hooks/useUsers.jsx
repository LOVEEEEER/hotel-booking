import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import userService from "../services/user.service";

const UsersContext = React.createContext();

export const useUsers = () => {
    return useContext(UsersContext);
};

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState();
    useEffect(() => {
        getUsers();
    }, []);
    async function getUsers() {
        try {
            const { content } = await userService.fetchAll();
            setUsers(content);
        } catch (error) {
            console.log(error);
        }
    }
    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };
    return (
        <UsersContext.Provider value={{ users, getUserById }}>
            {children}
        </UsersContext.Provider>
    );
};

UsersProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default UsersProvider;
