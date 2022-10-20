import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import TableCell from "@mui/material/TableCell";
import TableBodyMUI from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            return component(item);
        }
        return _.get(item, columns[column].path);
    };

    console.log(data, columns);

    return (
        <TableBodyMUI>
            {data.map((item) => (
                <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    {Object.keys(columns).map((column) => (
                        <TableCell align="right" key={column}>
                            {renderContent(item, column)}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBodyMUI>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;
