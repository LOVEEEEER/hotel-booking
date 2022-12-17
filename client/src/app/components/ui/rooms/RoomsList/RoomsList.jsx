import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomCard from "../RoomCard";
import { useDialog } from "../../../../hooks/useDialog";
import EditRoomWindow from "../../dialogs/EditRoomWindow/EditRoomWindow";

const RoomsList = ({ items, ...rest }) => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const [editRoom, setEditRoom] = useState();
    const handleEditRoom = (data) => {
        setEditRoom(data);
        handleClickOpen();
    };
    return (
        <>
            <ul className="rooms__list">
                {items.map((item) => (
                    <li key={item._id}>
                        <RoomCard
                            onEditRoom={handleEditRoom}
                            room={item}
                            {...rest}
                        />
                    </li>
                ))}
            </ul>
            <EditRoomWindow room={editRoom} open={open} onClose={handleClose} />
        </>
    );
};

RoomsList.propTypes = {
    items: PropTypes.array.isRequired
};

export default RoomsList;
