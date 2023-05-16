import React from "react";
import { Pagination as PaginationMUI, styled } from "@mui/material";

const PaginationStyled = styled(PaginationMUI)(() => ({
    color: "rgb(99, 140, 253)"
}));

type PaginationProps = {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    onChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = (props) => {
    const { itemsCount, pageSize, currentPage, onChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    return (
        <div className="pagination-container">
            <PaginationStyled
                page={currentPage + 1}
                count={pageCount}
                variant="outlined"
                color="primary"
                size="large"
                onChange={(e, pageIndex) => onChange(pageIndex - 1)}
            />
        </div>
    );
};

export default Pagination;
