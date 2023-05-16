import { useState, useEffect } from "react";
import _ from "lodash";

export type SortType<T> = {
    path: T;
    order: "asc" | "desc";
};

export default function useSort<T>(items: T[], firstPath: keyof T) {
    const [sortedItems, setSortedItems] = useState<T[]>(items);
    const [sortBy, setSortBy] = useState<SortType<keyof T>>({
        path: firstPath,
        order: "asc"
    });

    const handleSortBy = (item: SortType<keyof T>) => {
        setSortBy(item);
    };

    useEffect(() => {
        const orderedItems = _.orderBy(items, [sortBy.path], [sortBy.order]);
        setSortedItems(orderedItems);
    }, [sortBy, items]);

    return { sortedItems, sortBy, handleSortBy };
}
