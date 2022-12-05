import React from "react";
import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableSortLabel } from "@mui/material";

const TableHeader = ({ selectedSort, columns, onSort }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                route: selectedSort.route === "asc" ? "desc" : "asc"
            });
            return;
        }
        onSort({
            path: item,
            route: "asc"
        });
    };
    const renderSortArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.route === "asc") {
                return "asc";
            } else {
                return "desc";
            }
        }
        return "";
    };
    return (
        <TableHead>
            <TableRow>
                {Object.keys(columns).map((column) => (
                    <TableCell align="right" key={column}>
                        <TableSortLabel
                            onClick={() => handleSort(columns[column].path)}
                            active={selectedSort.path === columns[column].path}
                            direction={renderSortArrow(
                                selectedSort,
                                columns[column].path
                            )}
                        >
                            {columns[column].name}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default TableHeader;
