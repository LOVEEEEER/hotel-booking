import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import SelectField from "../../../common/form/SelectField";
import { validatorConfig } from "./validatorConfig";
import CheckboxField from "../../../common/form/CheckboxField";
import {
    breakfastList,
    categoriesList
} from "../../../../constants/appFilterConfig";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../../../store/slices/rooms";
import "./scss/edit-room-form.scss";

const EditRoomForm = ({
    _id,
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
    const dispatch = useDispatch();
    const { data, handleChange } = useForm(
        {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateRoom({ ...data, _id }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <SelectField
                label="Тип"
                name="type"
                value={data.type}
                onChange={handleChange}
                options={categoriesList}
                sx={{ width: "100%", marginBottom: "20px" }}
            />
            <div className="admin__first-filters">
                <h3 className="admin__filter-title">Удобства</h3>
                <CheckboxField
                    name="hasSmokeZone"
                    value={
                        data.hasSmokeZone === undefined
                            ? false
                            : data.hasSmokeZone
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
                    value={
                        data.hasParking === undefined ? false : data.hasParking
                    }
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
            </div>
            <div className="admin__second-filters">
                <h3 className="admin__filter-title">Завтраки</h3>
                <CheckboxField
                    name="breakfast"
                    value={data.breakfast}
                    onChange={handleChange}
                    options={breakfastList}
                />
            </div>
            <Button sx={{ width: "100%" }}>Обновить</Button>
        </form>
    );
};

EditRoomForm.propTypes = {
    _id: PropTypes.string,
    type: PropTypes.string,
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
