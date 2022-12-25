import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { usePaginate } from "../../../../hooks/usePaginate";
import { TableFooter } from "@mui/material";

export const Table = ({ children, data, ...rest }) => {
    console.log(data);
    const {
        itemsCrop: dataCrop,
        handlePageChange,
        currentPage,
        pageSize,
        handleChangePageSize
    } = usePaginate(data, 5);

    useEffect(() => {
        if (dataCrop.length === 0) {
            handlePageChange(0);
        }
    }, [dataCrop]);

    return (
        <TableContainer component={Paper}>
            <TableMUI sx={{ minWidth: 650 }}>
                {children || (
                    <>
                        <TableHeader {...rest} />
                        <TableBody data={dataCrop} {...rest} />
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    count={data.length}
                                    rowsPerPage={pageSize}
                                    page={currentPage}
                                    SelectProps={{
                                        inputProps: {
                                            "aria-label": "rows per page"
                                        },
                                        native: true
                                    }}
                                    onPageChange={(e, page) =>
                                        handlePageChange(page)
                                    }
                                    onRowsPerPageChange={(e) =>
                                        handleChangePageSize(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </TableRow>
                        </TableFooter>
                    </>
                )}
            </TableMUI>
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
