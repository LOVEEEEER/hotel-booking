export const validatorConfig = {
  entry: {
    isRequired: {
      message: "Поле 'Заезд' обязательно для заполнения",
    },
    isDate: {
      message: "Поле 'Заезд' введено не корректно",
    },
    notThePast: {
      message: "Поле 'Заезд' не может быть меньше текущего времени",
      params: Date.now(),
    },
  },
  departure: {
    isRequired: {
      message: "Поле 'Выезд' обязательно для заполнения",
    },
    isDate: {
      message: "Поле 'Выезд' введено не корректно",
    },
    notThePast: {
      message: "Поле 'Выезд' не может быть меньше текущего времени",
      params: Date.now(),
    },
  },
};
