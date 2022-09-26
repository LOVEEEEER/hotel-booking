import React, { useContext, useEffect, useState } from "react";
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
    <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>
  );
};

export default RoomsProvider;
