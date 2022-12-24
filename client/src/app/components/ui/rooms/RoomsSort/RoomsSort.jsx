import React from "react";
import PropTypes from "prop-types";
import {
    sortByList,
    pageSizesList
} from "../../../../constants/appFilterConfig";
import SelectField from "../../../common/form/SelectField";

const RoomsSort = ({ sortBy, pageSize, onChangePageSize, onSortBy }) => {
    return (
        <div className="rooms__select-block">
            <SelectField
                value={sortBy.route}
                options={sortByList}
                label="Сортировать по:"
                onChange={onSortBy}
                name="sortBy"
            />
            <SelectField
                value={pageSize}
                label="Отображать по"
                options={pageSizesList}
                name="pageSize"
                onChange={({ target }) => onChangePageSize(target.value)}
            />
        </div>
    );
};

RoomsSort.propTypes = {
    sortBy: PropTypes.exact({
        path: PropTypes.string,
        route: PropTypes.string
    }).isRequired,
    pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    onChangePageSize: PropTypes.func.isRequired,
    onSortBy: PropTypes.func
};

export default RoomsSort;
