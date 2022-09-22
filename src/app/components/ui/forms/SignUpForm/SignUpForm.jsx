import React from "react";
import TextField from "../../../common/TextField";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import CheckboxField from "../../../common/CheckboxField";
import { useForm } from "../../../../hooks/useForm";

const SignUpForm = () => {
  const { handleChange, data, errors, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      password: "",
      twicePassword: "",
      license: false,
    },
    validatorConfig
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={Boolean(errors.name)}
        label="Введите ваше имя"
        onChange={handleChange}
        name="name"
        value={data.name}
        sx={{ marginBottom: "30px", minWidth: "400px" }}
        helperText={errors.name}
        placeholder="Иван Иванов"
      />
      <br />
      <TextField
        error={Boolean(errors.email)}
        label="Введите ваш адрес электронной почты"
        onChange={handleChange}
        name="email"
        value={data.email}
        sx={{ marginBottom: "30px", minWidth: "400px" }}
        helperText={errors.email}
        placeholder="example@mail.com"
      />
      <br />
      <TextField
        error={Boolean(errors.password)}
        label="Придумайте пароль"
        onChange={handleChange}
        type="password"
        name="password"
        value={data.password}
        sx={{ marginBottom: "30px", minWidth: "400px" }}
        helperText={errors.password}
      />
      <br />
      <TextField
        error={Boolean(errors.twicePassword)}
        label="Повторите пароль"
        type="password"
        onChange={handleChange}
        name="twicePassword"
        value={data.twicePassword}
        sx={{ marginBottom: "15px", minWidth: "400px" }}
        helperText={errors.twicePassword}
      />
      <br />
      <CheckboxField
        label="Подтвердить пользовательское соглашение"
        onChange={handleChange}
        value={data.license}
        name="license"
        sx={{ marginBottom: "15px" }}
      >
        Подтвердить пользовательское соглашение
      </CheckboxField>
      <br />
      <Button type="submit" sx={{ width: "100%", padding: "9px" }}>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default SignUpForm;
