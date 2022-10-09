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
                        // items.forEach((room) => {
                        //     filtersValue.comfort.forEach((value) => {
                        //         if (room.comfort.includes(value)) {
                        //             const isRepeat = isRepeatElement(
                        //                 filteredItems,
                        //                 room
                        //             );
                        //             if (!isRepeat) {
                        //                 filteredItems.push(room);
                        //             }
                        //         }
                        //     });
                        // });
                        // items.forEach(room=>{
                        //    room.comfort(item=>)
                        // })
                        // items.forEach(room=>{
                        //     fi
                        // })
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
                    }
                }
            });

            return filteredItems.length !== 0 ? filteredItems : items;
        }
    };

    return { searchQuery, handleSearchQuery, getFilteredItems };
};
