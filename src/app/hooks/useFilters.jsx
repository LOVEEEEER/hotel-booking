import { useState } from "react";

export const useFilters = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };

    function isRepeatElement(items, item) {
        return items.some((_item) => _item.id === item.id);
    }

    const getFilteredItems = (items, filtersValue) => {
        const filteredItems = [];
        const filters = Object.keys(filtersValue).filter((item) => {
            return filtersValue[item]?.length ? item : null;
        });
        if (items) {
            filters.forEach((item) => {
                switch (item) {
                    case "comfort": {
                        break;
                    }
                    case "rate": {
                        console.log(filteredItems);
                        items.forEach((room) => {
                            if (room.rate.toString() === filtersValue.rate) {
                                const isRepeat = isRepeatElement(
                                    filteredItems,
                                    room
                                );
                                if (!isRepeat) {
                                    filteredItems.push(room);
                                }
                            }
                        });
                        break;
                    }
                }
            });

            return filteredItems.length !== 0 ? filteredItems : items;
        }
    };

    return { searchQuery, handleSearchQuery, getFilteredItems };
};
