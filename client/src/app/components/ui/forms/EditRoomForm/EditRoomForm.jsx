import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import SelectField from "../../../common/form/SelectField";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";
import CheckboxField from "../../../common/form/CheckboxField";
import { breakfastList } from "../../../../constants/AppFilterConfig";
import Button from "../../../common/Button";

const EditRoomForm = ({
    title,
    type,
    hasSmokeZone,
    hasSwimmingPool,
    hasBank,
    hasWifi,
    hasGym,
    hasParking,
    hasConditioner,
    breakfast
}) => {
    const { data, handleChange } = useForm(
        {
            title,
            type,
            hasSmokeZone,
            hasSwimmingPool,
            hasBank,
            hasWifi,
            hasGym,
            hasParking,
            hasConditioner,
            breakfast
        },
        validatorConfig
    );
    return (
        <form>
            <TextField
                name="title"
                label="Номер"
                value={data.title}
                sx={{ width: "100%", marginBottom: "20px" }}
                onChange={handleChange}
            />
            <br />
            <SelectField
                name="type"
                value={data.type}
                onChange={handleChange}
                options={[
                    {
                        value: "Стандарт",
                        label: "Стандарт"
                    },
                    {
                        value: "Комфорт",
                        label: "Комфорт"
                    }
                ]}
                sx={{ width: "100%", marginBottom: "20px" }}
            />
            <br />
            <h3 className="filter-panel__filter-title">Удобства</h3>
            <CheckboxField
                name="hasSmokeZone"
                value={
                    data.hasSmokeZone === undefined ? false : data.hasSmokeZone
                }
                label="Зона курения"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasSwimmingPool"
                value={
                    data.hasSwimmingPool === undefined
                        ? false
                        : data.hasSwimmingPool
                }
                label="Бассейн"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasBank"
                value={data.hasBank === undefined ? false : data.hasBank}
                label="Банк"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasWifi"
                value={data.hasWifi === undefined ? false : data.hasWifi}
                label="Wi-Fi"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasGym"
                value={data.hasGym === undefined ? false : data.hasGym}
                label="Зал"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasParking"
                value={data.hasParking === undefined ? false : data.hasParking}
                label="Парковка"
                onChange={handleChange}
            />
            <CheckboxField
                name="hasConditioner"
                value={
                    data.hasConditioner === undefined
                        ? false
                        : data.hasConditioner
                }
                label="Кондинционер"
                onChange={handleChange}
            />
            <h3 className="filter-panel__filter-title">Завтраки</h3>
            <CheckboxField
                name="breakfast"
                value={data.breakfast}
                onChange={handleChange}
                options={breakfastList}
            />
            <Button sx={{ width: "100%" }}>Обновить</Button>
        </form>
    );
};

EditRoomForm.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hasSmokeZone: PropTypes.bool,
    hasSwimmingPool: PropTypes.bool,
    hasBank: PropTypes.bool,
    hasWifi: PropTypes.bool,
    hasGym: PropTypes.bool,
    hasParking: PropTypes.bool,
    hasConditioner: PropTypes.bool,
    breakfast: PropTypes.arrayOf(PropTypes.string)
};

export default EditRoomForm;
