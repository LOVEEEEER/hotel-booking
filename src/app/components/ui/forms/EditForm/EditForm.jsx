import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { getCurrentUser, updateUser } from "../../../../store/users";
import Button from "../../../common/Button";
import DatePicker from "../../../common/form/DatePicker";
import RadioField from "../../../common/form/RadioField";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";

const EditForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const { data, handleChange, errors } = useForm(
        {
            name: currentUser.name,
            birth: currentUser.birth,
            sex: currentUser.sex
        },
        validatorConfig
    );
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const updatedUser = {
                ...currentUser,
                ...data,
                birth: new Date(data.birth).getTime()
            };
            dispatch(updateUser(updatedUser));
        }
    };
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                error={Boolean(errors.name)}
                helperText={errors.name}
                name="name"
                label="Имя"
                value={data.name}
                onChange={handleChange}
                sx={{ width: "100%", marginBottom: "20px" }}
            />
            <br />
            <DatePicker
                name="birth"
                onChange={handleChange}
                label="Дата рождения"
                helperText={errors.birth}
                value={data.birth}
                error={Boolean(errors.birth)}
                sx={{ width: "100%", marginBottom: "20px" }}
            />
            <br />
            <RadioField
                row
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
            />
            <br />
            <Button sx={{ width: "100%" }}>Редактировать</Button>
        </form>
    );
};

export default EditForm;
