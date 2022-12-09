export const validatorConfig = {
    email: {
        isRequired: {
            message: "Поле E-mail обязательно для заполнения"
        },
        isEmail: {
            message: "Поле E-mail введено некоректно"
        }
    },
    name: {
        isRequired: {
            message: "Поле имя не может быть пустым"
        }
    },
    description: {
        isRequired: {
            message: "Поле сообщение обязательно для заполнения"
        }
    }
};
