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
                    case "prices": {
                        const minValues = [];
                        const maxValues = [];
                        filtersValue.prices.forEach((p) => {
                            minValues.push(p.split("-")[0]);
                            maxValues.push(p.split("-")[1]);
                        });
                        items.forEach((room) => {
                            minValues.forEach((value, index) => {
                                if (
                                    room.price >= value &&
                                    room.price <= maxValues[index]
                                ) {
                                    const isRepeat = isRepeatElement(
                                        filteredItems,
                                        room
                                    );
                                    if (!isRepeat) {
                                        filteredItems.push(room);
                                    }
                                }
                            });
                        });
                    }

                    case "comfort": {
                        items.forEach((room) => {
                            filtersValue.comfort.forEach((value) => {
                                if (room.comfort.includes(value)) {
                                    const isRepeat = isRepeatElement(
                                        filteredItems,
                                        room
                                    );
                                    if (!isRepeat) {
                                        filteredItems.push(room);
                                    }
                                }
                            });
                        });
                    }
                }
            });

            return filteredItems.length !== 0 ? filteredItems : items;
        }
    };

    return { searchQuery, handleSearchQuery, getFilteredItems };
};
