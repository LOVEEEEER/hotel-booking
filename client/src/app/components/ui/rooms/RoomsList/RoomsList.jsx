import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomCard from "../RoomCard";
import { useDialog } from "../../../../hooks/useDialog";
import EditRoomWindow from "../../dialogs/EditRoomWindow/EditRoomWindow";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";

const RoomsList = ({ items, ...rest }) => {
    const { itemsCrop, handlePageChange, pageSize, currentPage } = usePaginate(
        items,
        6
    );
    const { open, handleClickOpen, handleClose } = useDialog();
    const [editRoom, setEditRoom] = useState();
    const handleEditRoom = (data) => {
        setEditRoom(data);
        handleClickOpen();
    };
    return (
        <>
            <ul className="rooms__list">
                {itemsCrop.map((item) => (
                    <li key={item._id}>
                        <RoomCard
                            onEditRoom={handleEditRoom}
                            room={item}
                            {...rest}
                        />
                    </li>
                ))}
            </ul>
            {itemsCrop.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    itemsCount={items.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
            )}
            <EditRoomWindow room={editRoom} open={open} onClose={handleClose} />
        </>
    );
};

RoomsList.propTypes = {
    items: PropTypes.array.isRequired
};

export default RoomsList;
