import React from "react";
import PropTypes from "prop-types";
import CheckboxField from "../../../common/form/CheckboxField";

const FilterPanel = ({ filters, onChangeFilter }) => {
    const handleChange = ({ target }) => {
        const copyFilters = { ...filters };
        const isIncludeFilter = filters[target.name].includes(target.value);

        if (!isIncludeFilter) {
            copyFilters[target.name].push(target.value);
        } else {
            copyFilters[target.name].splice(
                copyFilters[target.name].indexOf(target.value),
                1
            );
        }
        const fakeEvent = {
            target: {
                name: target.name,
                value: copyFilters[target.name]
            }
        };
        onChangeFilter(fakeEvent);
    };
    return (
        <>
            <ul className="filter-panel__list">
                <li className="filter-panel__item">
                    <h3 className="filter-panel__name">Цена за номер</h3>
                    <div className="filter-panel__checkbox-block">
                        <CheckboxField
                            value="0-1000"
                            name="prices"
                            label="0-1000 руб. ночь"
                            onChange={handleChange}
                        />
                        <CheckboxField
                            value="1000-2000"
                            name="prices"
                            label="1000-2000 руб. ночь"
                            onChange={handleChange}
                        />
                        <CheckboxField
                            value="2000-3000"
                            name="prices"
                            label="2000-3000 руб. ночь"
                            onChange={handleChange}
                        />
                        <CheckboxField
                            value="3000-5000"
                            name="prices"
                            label="3000-5000 руб. ночь"
                            onChange={handleChange}
                        />
                    </div>
                </li>
            </ul>
        </>
    );
};

FilterPanel.propTypes = {
    filters: PropTypes.object.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};

export default FilterPanel;
