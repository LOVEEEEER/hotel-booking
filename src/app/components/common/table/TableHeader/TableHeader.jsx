import React from "react";
import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = ({ columns }) => {
    return (
        <TableHead>
            <TableRow>
                {Object.keys(columns).map((column) => (
                    <TableCell align="right" key={column}>
                        {columns[column].name}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.object.isRequired
};

export default TableHeader;
