import { ValidatorConfigType } from "../../../../utils/validator";

export const validatorConfig: ValidatorConfigType = {
    email: {
        isRequired: {
            message: "Поле E-mail обязательно для заполнения"
        },
        isEmail: {
            message: "Поле E-mail введено некоректно"
        },
        max: {
            params: 30,
            message: "Поле E-mail не может превышать длину 30 символов"
        }
    },
    name: {
        isRequired: {
            message: "Поле имя не может быть пустым"
        },
        max: {
            params: 30,
            message: "Поле имя не может превышать длину 30 символов"
        }
    },
    description: {
        isRequired: {
            message: "Поле сообщение обязательно для заполнения"
        },
        max: {
            params: 300,
            message: "Поле имя не может превышать длину 300 символов"
        }
    }
};
