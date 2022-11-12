import { useState, useEffect } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath) => {
    const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({ path: initialPath, route: "asc" });
    const handleSortBy = (item) => {
        setSortBy({ ...item });
    };

    useEffect(() => {
        const orderedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
        setSortedItems(orderedItems);
    }, [sortBy]);

    return { handleSortBy, sortBy, sortedItems };
};
