import { useState, useEffect } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath, initialRoute) => {
    const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({
        path: initialPath,
        route: !initialRoute ? "asc" : initialRoute
    });

    const handleSortBy = ({ target: { value } }) => {
        console.log(value);
        setSortBy((prevState) => ({ ...prevState, route: value }));
    };

    useEffect(() => {
        const orderedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
        setSortedItems(orderedItems);
    }, [sortBy, elements]);

    return { handleSortBy, sortBy, sortedItems };
};
