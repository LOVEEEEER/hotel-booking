export const validatorConfig = {
  email: {
    isRequired: {
      message: "Поле E-mail обязательно для заполнения",
    },
    isEmail: {
      message: "Поле E-mail введено некоректно",
    },
  },
  password: {
    isRequired: {
      message: "Поле пароль обязательно для заполнения",
    },
  },
};
