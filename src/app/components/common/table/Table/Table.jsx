import React from "react";
import PropTypes from "prop-types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { useSort } from "../../../../hooks/useSort";
import { usePaginate } from "../../../../hooks/usePaginate";

export const Table = ({ children, data, ...rest }) => {
    const { sortedItems, sortBy } = useSort(data, "name");
    const {
        itemsCrop: dataCrop,
        handlePageChange,
        currentPage,
        pageSize,
        handleChangePageSize
    } = usePaginate(sortedItems, 5);

    return (
        <TableContainer component={Paper}>
            <TableMUI sx={{ minWidth: 650 }}>
                {children || (
                    <>
                        <TableHeader sortBy={sortBy} {...rest} />
                        <TableBody data={dataCrop} {...rest} />
                    </>
                )}
            </TableMUI>

            <TableRow>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={10}
                    rowsPerPage={pageSize}
                    page={currentPage}
                    SelectProps={{
                        inputProps: {
                            "aria-label": "rows per page"
                        },
                        native: true
                    }}
                    onPageChange={(e, page) => handlePageChange(page)}
                    onRowsPerPageChange={(e) =>
                        handleChangePageSize(Number(e.target.value))
                    }
                />
            </TableRow>
        </TableContainer>
    );
};

Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    data: PropTypes.array.isRequired
};

export default Table;
