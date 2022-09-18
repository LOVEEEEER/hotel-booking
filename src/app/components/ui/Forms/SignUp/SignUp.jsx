import React, { useEffect, useState } from "react";
import TextField from "../../common/TextField";
import Button from "../../common/Button";
import { validator } from "../../../utils/validator";
import { validatorConfig } from "./validatorConfig";
import CheckboxField from "../../common/CheckboxField";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    twicePassword: "",
    license: false,
  });
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    if (data.password !== data.twicePassword) {
      errors.twicePassword = "Пароли не совпадают";
    }
    setErrors(errors);
    if (!isValid) return;
  };
  useEffect(() => {
    validate();
  }, [validate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  const isValid = Object.keys(errors).length === 0;
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

export default SignUp;
