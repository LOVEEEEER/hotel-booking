import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import TextField from "../../../common/form/TextField";
import DatePicker from "../../../common/form/DatePicker";
import Button from "../../../common/Button";

const EditForm = ({ currentUser }) => {
    const { data, handleChange } = useForm({
        name: currentUser.name,
        birth: currentUser.birth
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    if (currentUser) {
        return (
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    label="Имя пользователя"
                    sx={{ marginBottom: "23px", minWidth: "320px" }}
                />
                <br />
                <DatePicker
                    name="birth"
                    value={data.birth}
                    label="День рождения"
                    onChange={handleChange}
                    sx={{ marginBottom: "23px", minWidth: "320px" }}
                />
                <br />
                <Button>Редактировать профиль</Button>
            </form>
        );
    }
};

EditForm.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default EditForm;
