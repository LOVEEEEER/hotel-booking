import React, { useEffect, useState } from "react";
import TextField from "../../common/TextField";
import Button from "../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { validator } from "../../../utils/validator";

const SignIn = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    if (Object.keys(errors).length) {
      validate();
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };
  return (
    <form className="signin__form" onSubmit={handleSubmit}>
      <TextField
        error={Boolean(errors.email)}
        label="Введите ваш E-mail"
        name="email"
        onChange={handleChange}
        value={data.email}
        sx={{ marginBottom: "30px", minWidth: "400px" }}
        helperText={errors.email ? errors.email : null}
      />
      <br />
      <TextField
        error={Boolean(errors.password)}
        label="Введите ваш пароль"
        type="password"
        name="password"
        onChange={handleChange}
        value={data.password}
        sx={{ marginBottom: "30px", minWidth: "400px" }}
        helperText={errors.password ? errors.password : null}
      />
      <br />
      <Button
        type="submit"
        sx={{ width: "100%", padding: "9px" }}
        variant="outlined"
        label="Войти"
      />
    </form>
  );
};

export default SignIn;
