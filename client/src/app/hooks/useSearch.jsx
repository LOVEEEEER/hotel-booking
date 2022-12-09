import { useState, useEffect } from "react";

const useSearch = (items) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryItems, setSearchQueryItems] = useState(items);
    const handleSearchQuery = ({ target: { value } }) => {
        setSearchQuery(value);
    };
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
