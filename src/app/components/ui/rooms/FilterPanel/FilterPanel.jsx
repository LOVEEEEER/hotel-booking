import React from "react";
import PropTypes from "prop-types";
import CheckboxField from "../../../common/form/CheckboxField";
import RadioField from "../../../common/form/RadioField";

const FilterPanel = ({ filters, onChangeFilter }) => {
    const handleChange = ({ target }) => {
        if (Array.isArray(filters[target.name])) {
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
            return;
        }
        const fakeEvent = {
            target: {
                name: target.name,
                value: target.value
            }
        };
        onChangeFilter(fakeEvent);
    };
    const ratesRadio = [
        { label: "Отлично", value: 5 },
        { label: "Хорошо", value: 4 },
        { label: "Нормально", value: 3 }
    ];
    return (
        <>
            <ul className="filter-panel__list">
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
                <li className="filter-panel__item">
                    <h3 className="filter-panel__name">Оценка по отзывам</h3>
                    <div className="filter-panel__checkbox-block">
                        <RadioField
                            options={ratesRadio}
                            onChange={handleChange}
                            name="rate"
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
