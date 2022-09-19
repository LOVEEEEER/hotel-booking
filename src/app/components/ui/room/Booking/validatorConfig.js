export const validatorConfig = {
  entry: {
    isRequired: {
      message: "Поле 'Заезд' обязательно для заполнения",
    },
    isDate: {
      message: "Поле 'Заезд' введено не корректно",
    },
  },
  departure: {
    isRequired: {
      message: "Поле 'Выезд' обязательно для заполнения",
    },
    isDate: {
      message: "Поле 'Выезд' введено не корректно",
    },
  },
};
