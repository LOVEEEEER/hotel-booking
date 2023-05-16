import { useState } from "react";
import { paginate } from "../utils/paginate";

export default function usePaginate<T>(items: T[], initialSize: number) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(initialSize);

    const handleChangePage = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const handleChangePageSize = (size: number | string) => {
        setPageSize(Number(size));
    };

    console.log(items, "usePaginate");

    const itemsCrop = paginate(items, currentPage, pageSize);

    return {
        itemsCrop,
        currentPage,
        pageSize,
        handleChangePage,
        handleChangePageSize
    };
}
