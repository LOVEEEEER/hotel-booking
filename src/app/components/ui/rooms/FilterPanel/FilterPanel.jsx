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
                            value="1000-2000"
                            name="prices"
                            label="1000-2000 руб. ночь"
                            onChange={handleChange}
                            checked={filters.prices.includes("1000-2000")}
                        />
                        <CheckboxField
                            value="2000-3000"
                            name="prices"
                            label="2000-3000 руб. ночь"
                            onChange={handleChange}
                            checked={filters.prices.includes("2000-3000")}
                        />
                        <CheckboxField
                            value="3000-4000"
                            name="prices"
                            label="3000-4000 руб. ночь"
                            onChange={handleChange}
                            checked={filters.prices.includes("3000-4000")}
                        />
                        <CheckboxField
                            value="4000-5000"
                            name="prices"
                            label="4000-5000 руб. ночь"
                            onChange={handleChange}
                            checked={filters.prices.includes("4000-5000")}
                        />
                        <CheckboxField
                            value="5000-99999999999999"
                            name="prices"
                            label="Свыше 5000 руб"
                            onChange={handleChange}
                            checked={filters.prices.includes(
                                "5000-99999999999999"
                            )}
                        />
                    </div>
                </li>
                <li className="filter-panel__item">
                    <h3 className="filter-panel__name">Удобства</h3>
                    <div className="filter-panel__checkbox-block">
                        <CheckboxField
                            value="wifi"
                            name="comfort"
                            label="WI-Fi"
                            onChange={handleChange}
                            checked={filters.comfort.includes("wifi")}
                        />
                        <CheckboxField
                            value="swimmingPool"
                            name="comfort"
                            label="Бассейн"
                            onChange={handleChange}
                            checked={filters.comfort.includes("swimmingPool")}
                        />
                        <CheckboxField
                            value="parking"
                            name="comfort"
                            label="Частная парковка"
                            onChange={handleChange}
                            checked={filters.comfort.includes("parking")}
                        />
                        <CheckboxField
                            value="bankCard"
                            name="comfort"
                            label="Безнал"
                            onChange={handleChange}
                            checked={filters.comfort.includes("bankCard")}
                        />
                        <CheckboxField
                            value="gym"
                            name="comfort"
                            label="Спортзал"
                            onChange={handleChange}
                            checked={filters.comfort.includes("gym")}
                        />
                        <CheckboxField
                            value="conditioner"
                            name="comfort"
                            label="Кондинционер"
                            onChange={handleChange}
                            checked={filters.comfort.includes("conditioner")}
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
