import { useState } from "react";
// import _ from "lodash";

export const useSort = (elements, initialPath) => {
    // const [sortedItems, setSortedItems] = useState(elements);
    const [sortBy, setSortBy] = useState({ path: initialPath, route: "asc" });
    const handleSortBy = (item) => {
        setSortBy({ ...item });
    };

    // useEffect(() => {
    //     const sorted = _.orderBy(elements, [sortBy.path], ["desc"]);
    //     setSortedItems(sorted);

    //     console.log(sortBy.route);
    // }, [sortBy]);

    return { handleSortBy, sortBy };
};
