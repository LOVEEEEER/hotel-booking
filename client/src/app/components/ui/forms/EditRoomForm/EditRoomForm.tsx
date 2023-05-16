import React from "react";
import {
    breakfastList,
    categoriesList
} from "../../../../constants/appFiltersConfig";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import { Room } from "../../../../types/types";
import Button from "../../../common/Button";
import CheckboxField from "../../../common/fields/CheckboxField";
import SelectField from "../../../common/fields/SelectField";
import { validatorConfig } from "./validatorConfig";
import { updateRoom } from "../../../../store/rooms/roomsActions";

type EditRoomFormProps = {
    room: Room;
};

const EditRoomForm: React.FC<EditRoomFormProps> = ({ room }) => {
    const {
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
    } = room;
    const dispatch = useAppDispatch();
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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateRoom({ ...room, ...data, _id }));
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

export default EditRoomForm;
