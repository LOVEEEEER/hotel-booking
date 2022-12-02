import React from "react";
import PropTypes from "prop-types";
import { Pagination as PaginationMui } from "@mui/material";

const Pagination = ({ itemsCount, pageSize, currentPage, onChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    return (
        <div className="pagination-container">
            <PaginationMui
                page={currentPage}
                count={pageCount}
                variant="outlined"
                color="primary"
                size="large"
                onChange={onChange}
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
