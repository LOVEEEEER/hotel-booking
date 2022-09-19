import React from "react";
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

export default Pagination;
