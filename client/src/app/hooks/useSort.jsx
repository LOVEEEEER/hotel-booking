import { useState, useEffect } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath) => {
    const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({ path: initialPath, route: "asc" });
    const handleSortBy = (item) => {
        if (sortBy.path === item) {
            setSortBy((prevState) => ({
                ...prevState,
                route: sortBy.route === "asc" ? "desc" : "asc"
            }));
            return;
        }
        setSortBy((prevState) => ({
            ...prevState,
            route: "asc"
        }));
    };

    useEffect(() => {
        const orderedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
        setSortedItems(orderedItems);
    }, [sortBy, elements]);

    return { handleSortBy, sortBy, sortedItems };
};
