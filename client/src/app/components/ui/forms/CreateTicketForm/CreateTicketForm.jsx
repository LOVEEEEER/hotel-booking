import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";
import { toast } from "react-toastify";
import ticketService from "../../../../services/ticket.service";
import SelectField from "../../../common/form/SelectField";
import "./scss/create-ticket-form.scss";

const CreateTicketForm = ({ forDialog }) => {
    const { data, handleChange, errors, validateBySubmit } = useForm(
        {
            email: "",
            name: "",
            message: "",
            cause: ""
        },
        validatorConfig
    );
    const textFieldStyles = forDialog
        ? {
              marginBottom: "20px"
          }
        : {};
    const buttonStyles = forDialog
        ? {
              width: "100%"
          }
        : {};
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        await ticketService.create({ ...data, status: "pending" });
        toast.success("Сообщение успешно отправлено!");
    };
    return (
        <form
            className="feedback__form"
            onSubmit={handleSubmit}
            style={{ display: forDialog ? "block" : "flex" }}
        >
            <TextField
                name="email"
                value={data.email}
                onChange={handleChange}
                label="Ваш E-mail"
                placeholder="example@mail.com"
                errorMessage={errors.email}
                sx={textFieldStyles}
            />
            <br />
            <TextField
                name="name"
                value={data.name}
                onChange={handleChange}
                label="Ваше имя"
                placeholder="Иван Иванов"
                errorMessage={errors.name}
                sx={textFieldStyles}
            />
            <br />
            <TextField
                name="message"
                value={data.message}
                label="Сообщение"
                onChange={handleChange}
                errorMessage={errors.description}
                sx={textFieldStyles}
            />
            <br />
            <SelectField
                label="Причина обращения"
                name="cause"
                onChange={handleChange}
                value={data.cause}
                options={[
                    { label: "Баги", value: "errors" },
                    { label: "Вопрос", value: "offer" },
                    { label: "Другое", value: "other" }
                ]}
                sx={
                    forDialog
                        ? { width: "100%", marginBottom: "20px" }
                        : { width: "200px" }
                }
            />
            <br />
            <Button variant="outlined" sx={buttonStyles}>
                Отправить
            </Button>
        </form>
    );
};

CreateTicketForm.propTypes = {
    forDialog: PropTypes.bool
};

export default CreateTicketForm;
