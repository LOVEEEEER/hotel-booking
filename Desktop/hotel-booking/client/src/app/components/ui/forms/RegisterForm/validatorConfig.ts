import { ValidatorConfigType } from "./../../../../utils/validator";

export const validatorConfig: ValidatorConfigType = {
    name: {
        isRequired: {
            message: "Поле имя не может быть пустым"
        },
        max: {
            message: "Поле имя не может быть больше 20 символов",
            params: 20
        }
    },
    email: {
        isRequired: {
            message: "Поле E-mail обязательно для заполнения"
        },
        isEmail: {
            message: "Поле E-mail введено некоректно"
        }
    },
    password: {
        isRequired: {
            message: "Поле пароль обязательно для заполнения"
        },
        isContainDigit: {
            message: "Поле пароль должно иметь как минимум одно число"
        },
        isContainCapitalSymbol: {
            message: "Поле пароль должно иметь как минимум одну заглавную букву"
        },
        min: {
            message: "Поле пароль должно содержать минимум 8 символов",
            params: 8
        }
    },
    license: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    birth: {
        isRequired: {
            message: "Поле Дата Рождения обязательно для заполнения"
        },
        isCorrectDate: {
            message: "Поле Дата Рождения некоректна"
        },
        isAdult: {
            message: "Наш сервис предназначен для лиц старше 18 лет",
            params: 18
        }
    }
};
