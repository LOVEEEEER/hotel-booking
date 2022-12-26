import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomCard from "../RoomCard";
import { useDialog } from "../../../../hooks/useDialog";
import EditRoomWindow from "../../windows/EditRoomWindow/EditRoomWindow";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import "./scss/rooms-list.scss";

const RoomsList = ({
    items,
    clearListMessage,
    hasPagination,
    searchedItemsCount,
    ...rest
}) => {
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
    console.log(items);
    return (
        <>
            <ul className="rooms__list">
                {hasPagination
                    ? itemsCrop.map((item) => (
                          <li key={item._id} className="rooms__item">
                              <RoomCard
                                  onEditRoom={handleEditRoom}
                                  room={item}
                                  {...rest}
                              />
                          </li>
                      ))
                    : items.map((item) => (
                          <li key={item._id} className="rooms__item">
                              <RoomCard
                                  onEditRoom={handleEditRoom}
                                  room={item}
                                  {...rest}
                              />
                          </li>
                      ))}
            </ul>
            {items.length === 0 && (
                <p className="booking__error-message">{clearListMessage}</p>
            )}
            {hasPagination && itemsCrop.length > 0 && (
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
    items: PropTypes.array,
    clearListMessage: PropTypes.string.isRequired,
    hasPagination: PropTypes.bool,
    searchedItemsCount: PropTypes.number
};

export default RoomsList;
