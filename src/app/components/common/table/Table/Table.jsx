import React from "react";
import PropTypes from "prop-types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export const Table = ({ children, ...rest }) => {
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
