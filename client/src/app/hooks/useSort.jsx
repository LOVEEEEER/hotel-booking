import { useState, useEffect } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath, initialRoute) => {
    const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({
        path: initialPath,
        route: !initialRoute ? "asc" : initialRoute
    });

    const handleSortBy = ({ target: { value } }) => {
        setSortBy((prevState) => ({ ...prevState, route: value }));
    };

    useEffect(() => {
        const orderedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
        console.log("ordered", orderedItems);
        setSortedItems(orderedItems);
    }, [sortBy, elements]);

    return { handleSortBy, sortBy, sortedItems };
};
