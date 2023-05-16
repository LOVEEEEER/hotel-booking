import React, { useState } from "react";
import useDialog from "../../../../hooks/useDialog";
import usePaginate from "../../../../hooks/usePaginate";
import { Room } from "../../../../types/types";
import Pagination from "../../../common/Pagination";
import EditRoomDialog from "../../dialogs/EditRoomDialog";
import RoomCard from "../RoomCard";

type RoomsListProps = {
    items: Room[];
    clearListMessage?: string;
    hasPagination?: boolean;
    searchedItemsCount?: number;
    isFavorites?: boolean;
};

const RoomsList: React.FC<RoomsListProps> = ({
    items,
    clearListMessage,
    hasPagination,
    searchedItemsCount,
    ...rest
}) => {
    const [editRoom, setEditRoom] = useState<Room>();
    const { itemsCrop, handleChangePage, pageSize, currentPage } = usePaginate(
        items,
        6
    );
    const { open, handleOpen, handleClose } = useDialog();
    const handleEditRoom = (item: Room) => {
        setEditRoom(item);
        handleOpen();
    };
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
                    onChange={handleChangePage}
                />
            )}
            {editRoom && (
                <EditRoomDialog
                    room={editRoom}
                    open={open}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default RoomsList;
