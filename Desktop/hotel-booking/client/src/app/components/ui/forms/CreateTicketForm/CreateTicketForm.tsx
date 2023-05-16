import React from "react";
import { toast } from "react-toastify";
import useForm from "../../../../hooks/useForm";
import ticketsService from "../../../../services/tickets.service";
import Button from "../../../common/Button";
import SelectField from "../../../common/fields/SelectField";
import TextField from "../../../common/fields/TextField";
import { validatorConfig } from "./validatorConfig";

type CreateTicketFormProps = {
    isDialog?: boolean;
};

const createTicketInitialState = {
    email: "" as string,
    name: "" as string,
    message: "" as string,
    cause: "" as "errors" | "offer" | "other"
};

const CreateTicketForm: React.FC<CreateTicketFormProps> = ({ isDialog }) => {
    const { data, handleChange, errors, validateBySubmit } = useForm(
        createTicketInitialState,
        validatorConfig
    );

    const textFieldStyles = isDialog
        ? {
              marginBottom: "20px"
          }
        : {};
    const buttonStyles = isDialog
        ? {
              width: "100%"
          }
        : {};

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (!isValid) return;
        await ticketsService.create({
            ...data,
            status: "pending"
        });
        toast.success("Сообщение успешно отправлено!");
    };
    return (
        <form
            className="feedback__form"
            onSubmit={handleSubmit}
            style={{ display: isDialog ? "block" : "flex" }}
        >
            <TextField
                name="email"
                value={data.email}
                onChange={handleChange}
                label="Ваш E-mail"
                placeholder="example@mail.com"
                error={errors?.email}
                sx={textFieldStyles}
            />
            <br />
            <TextField
                name="name"
                value={data.name}
                onChange={handleChange}
                label="Ваше имя"
                placeholder="Иван Иванов"
                error={errors?.name}
                sx={textFieldStyles}
            />
            <br />
            <TextField
                name="message"
                value={data.message}
                label="Сообщение"
                onChange={handleChange}
                error={errors?.message}
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
                    isDialog
                        ? { width: "100%", marginBottom: "20px" }
                        : { width: "200px" }
                }
            />
            <br />
            <Button variant="outlined" sx={buttonStyles} type="submit">
                Отправить
            </Button>
        </form>
    );
};

export default CreateTicketForm;
