import { useState } from "react";
import { paginate } from "../utils/paginate";

export const usePaginate = (items, initialPageSize) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleChangePageSize = (size) => {
        setPageSize(size);
        setCurrentPage(0);
    };

    const itemsCrop = paginate(items, currentPage, pageSize);

    return {
        itemsCrop,
        currentPage,
        handlePageChange,
        handleChangePageSize,
        pageSize
    };
};
