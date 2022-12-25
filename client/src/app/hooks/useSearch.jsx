import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const useSearch = (items) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryItems, setSearchQueryItems] = useState(items);

    const handleSearchQuery = debounce(setSearchQuery, 200);

    useEffect(() => {
        const itemsFiltered = items
            ? items.filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : [];
        setSearchQueryItems(itemsFiltered);
    }, [searchQuery, items]);

    return { handleSearchQuery, searchQueryItems, searchQuery };
};

export default useSearch;
