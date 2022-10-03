import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import roomsService from "../services/rooms.service";

const RoomsContext = React.createContext();

export const useRooms = () => {
    return useContext(RoomsContext);
};

const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState();
    useEffect(() => {
        getRooms();
    }, []);
    async function getRooms() {
        try {
            const { content } = await roomsService.fetchAll();
            setRooms(content);
        } catch (error) {
            console.log(error);
        }
    }
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
