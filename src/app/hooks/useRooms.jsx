import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const RoomsContext = React.createContext();

export const useRooms = () => {
    return useContext(RoomsContext);
};

const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState();
    useEffect(() => {
        api.hotels.fetchAll().then((data) => setRooms(data));
    }, []);
    return (
        <RoomsContext.Provider value={{ rooms }}>
            {children}
        </RoomsContext.Provider>
    );
};

RoomsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default RoomsProvider;
