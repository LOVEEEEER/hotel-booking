import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomCard from "../RoomCard";
import { useDialog } from "../../../../hooks/useDialog";
import EditRoomWindow from "../../dialogs/EditRoomWindow/EditRoomWindow";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";

const RoomsList = ({ items, clearListMessage, ...rest }) => {
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
                {itemsCrop.length > 0 ? (
                    itemsCrop.map((item) => (
                        <li key={item._id}>
                            <RoomCard
                                onEditRoom={handleEditRoom}
                                room={item}
                                {...rest}
                            />
                        </li>
                    ))
                ) : (
                    <p className="booking__error-message">{clearListMessage}</p>
                )}
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

RoomsList.defaultProps = {
    clearListMessage: "Список номеров пуст"
};

RoomsList.propTypes = {
    items: PropTypes.array.isRequired,
    clearListMessage: PropTypes.string.isRequired
};

export default RoomsList;
