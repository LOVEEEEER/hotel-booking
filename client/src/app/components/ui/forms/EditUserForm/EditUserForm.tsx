import React from "react";
import { useSelector } from "react-redux";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import { User } from "../../../../types/types";
import Button from "../../../common/Button";
import DatePickerField from "../../../common/fields/DatePickerField";
import RadioField from "../../../common/fields/RadioField";
import TextField from "../../../common/fields/TextField";
import { validatorConfig } from "./validatorConfig";
import { getCurrentUser } from "../../../../store/users/usersSelectors";
import { updateUser } from "../../../../store/users/usersActions";

const EditUserForm = () => {
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUser());
    const { data, handleChange, errors } = useForm(
        {
            name: currentUser!.name as User["name"],
            birth: currentUser!.birth as User["birth"],
            sex: currentUser!.sex as User["sex"]
        },
        validatorConfig
    );
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submit");
        console.log(errors, currentUser);
        if (isValid && currentUser) {
            const updatedUser = {
                ...currentUser,
                ...data,
                birth: new Date(data.birth)
            };
            dispatch(updateUser(updatedUser));
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Имя"
                value={data.name}
                onChange={handleChange}
                sx={{ width: "100%", marginBottom: "20px" }}
                error={errors.name}
            />
            <br />
            <DatePickerField
                name="birth"
                onChange={handleChange}
                label="Дата рождения"
                value={data.birth}
                sx={{ width: "100%", marginBottom: "10px" }}
                error={errors.birth}
            />
            <br />
            <RadioField
                options={[
                    {
                        label: "Мужской",
                        value: "male"
                    },
                    {
                        label: "Женский",
                        value: "female"
                    }
                ]}
                name="sex"
                value={data.sex}
                onChange={handleChange}
                row
                sx={{ marginBottom: "10px" }}
            />
            <br />
            <Button sx={{ width: "100%" }} type="submit">
                Редактировать
            </Button>
        </form>
    );
};

export default EditUserForm;
