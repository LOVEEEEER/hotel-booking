import React, { useState } from "react";
import PropTypes from "prop-types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

export const Table = ({ children, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, page) => {
        setCurrentPage(page);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <TableMUI sx={{ minWidth: 650 }}>
                {children || (
                    <>
                        <TableHeader {...rest} />
                        <TableBody {...rest} />
                    </>
                )}
            </TableMUI>

            <TableRow>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    SelectProps={{
                        inputProps: {
                            "aria-label": "rows per page"
                        },
                        native: true
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableRow>
        </TableContainer>
    );
};

Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default Table;
