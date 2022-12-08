import React from "react";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/form/TextAreaField";
import TextField from "../../../common/form/TextField";

const FeedbackForm = () => {
    const { data, handleChange } = useForm({ email: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="feedback__form" onSubmit={handleSubmit}>
            <div>
                <TextField
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    label="Ваш E-mail"
                    placeholder="example@mail.com"
                />
            </div>
            <div>
                <TextField
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    label="Ваше имя"
                    placeholder="Иван Иванов"
                />
            </div>
            <div>
                <TextAreaField
                    name="message"
                    value={data.message}
                    label="Сообщение"
                    onChange={handleChange}
                />
            </div>
            <Button variant="outlined">Отправить</Button>
        </form>
    );
};

export default FeedbackForm;
