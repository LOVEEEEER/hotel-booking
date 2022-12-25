import React from "react";
import PropTypes from "prop-types";
import { Pagination as PaginationMui, styled } from "@mui/material";
import "./scss/pagination.scss";

const PaginationStyled = styled(PaginationMui)(() => ({
    color: "rgb(99, 140, 253)"
}));

const Pagination = ({ itemsCount, pageSize, currentPage, onChange }) => {
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

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    onChange: PropTypes.func.isRequired
};

export default Pagination;
