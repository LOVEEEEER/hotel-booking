import { useState } from "react";
import _ from "lodash";

export const useSort = (elements, initialPath) => {
    const [sortBy, setSortBy] = useState({ path: initialPath, route: "asc" });
    const handleSort = (item) => {
        setSortBy(item);
    };
    const sortedItems = _.orderBy(elements, [sortBy.path], [sortBy.route]);
    return { sortedItems, handleSort, sortBy };
};
