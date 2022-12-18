import React from "react";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";
import { toast } from "react-toastify";
import feedbackService from "../../../../services/feedback.service";
import { nanoid } from "@reduxjs/toolkit";

const FeedbackForm = () => {
    const { data, handleChange, errors, validateBySubmit } = useForm(
        {
            email: "",
            name: "",
            description: ""
        },
        validatorConfig
    );
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        await feedbackService.create(nanoid(), data);
        toast.success("Сообщение успешно отправлено!");
    };
    return (
        <form className="feedback__form" onSubmit={handleSubmit}>
            <TextField
                name="email"
                value={data.email}
                onChange={handleChange}
                label="Ваш E-mail"
                placeholder="example@mail.com"
                errorMessage={errors.email}
            />
            <br />
            <TextField
                name="name"
                value={data.name}
                onChange={handleChange}
                label="Ваше имя"
                placeholder="Иван Иванов"
                errorMessage={errors.name}
            />
            <br />
            <TextField
                name="description"
                value={data.description}
                label="Сообщение"
                onChange={handleChange}
                errorMessage={errors.description}
            />
            <br />
            <Button variant="outlined">Отправить</Button>
        </form>
    );
};

export default FeedbackForm;
