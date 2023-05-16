import { SelectChangeEvent } from "@mui/material";
import React from "react";
import {
    pageSizesList,
    sortByList
} from "../../../../constants/appFiltersConfig";
import { SortType } from "../../../../hooks/useSort";
import { Room } from "../../../../types/types";
import SelectField from "../../../common/fields/SelectField";

type RoomsSortProps = {
    sortBy: SortType<keyof Room>;
    pageSize: number;
    onChangePageSize: (page: string | number) => void;
    onSortBy: (item: SortType<keyof Room>) => void;
};

const RoomsSort: React.FC<RoomsSortProps> = ({
    sortBy,
    pageSize,
    onChangePageSize,
    onSortBy
}) => {
    const getOrderValue = (value: string) => {
        return value === "asc" || value === "desc" ? value : "asc";
    };
    const handleSort = ({ target: { value } }: SelectChangeEvent) => {
        onSortBy({
            path: "price",
            order: getOrderValue(value)
        });
    };
    return (
        <div className="rooms__select-block">
            <SelectField
                name="sortBy"
                value={sortBy.order}
                options={sortByList}
                label="Сортировать по:"
                onChange={handleSort}
            />
            <SelectField
                name="pageSize"
                value={pageSize.toString()}
                label="Отображать по:"
                options={pageSizesList}
                onChange={({ target }: SelectChangeEvent) =>
                    onChangePageSize(target.value)
                }
            />
        </div>
    );
};

export default RoomsSort;
