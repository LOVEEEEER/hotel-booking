export const validatorConfig = {
  name: {
    isRequired: {
      message: "Поле имя не может быть пустым",
    },
  },
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
    isContainDigit: {
      message: "Поле пароль должно иметь как минимум одно число",
    },
    isContainCapitalSymbol: {
      message: "Поле пароль должно иметь как минимум одну заглавную букву",
    },
    min: {
      message: "Поле пароль должно содержать минимум 8 символов",
      params: 8,
    },
  },
};
