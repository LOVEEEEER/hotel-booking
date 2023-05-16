import { useState, useEffect } from "react";
import { debounce } from "@mui/material";

export default function useSearchQuery<T>(items: T[], path: keyof T) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedItems, setSearchedItems] = useState<T[]>(items);

    console.log(items);

    const handleSearchQuery = debounce(setSearchQuery, 200);

    useEffect(() => {
        const filteredItems = items.filter((item) =>
            JSON.stringify(item[path])
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
        setSearchedItems(filteredItems);
    }, [searchQuery, items]);

    return { searchQuery, handleSearchQuery, searchedItems };
}
