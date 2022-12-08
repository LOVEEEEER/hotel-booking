import { useState, useEffect } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath) => {
    const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({ path: initialPath, route: "asc" });

    const handleSortBy = ({ target: { value } }) => {
        setSortBy((prevState) => ({ ...prevState, route: value }));
    };

    useEffect(() => {
        const orderedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
        setSortedItems(orderedItems);
    }, [sortBy, elements]);

    return { handleSortBy, sortBy, sortedItems };
};
