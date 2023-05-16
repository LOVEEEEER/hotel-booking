import { ValidatorConfigType } from "./../../../../utils/validator";

export const validatorConfig: ValidatorConfigType = {
    name: {
        isRequired: {
            message: "Поле 'имя обязательно для заполнения'"
        }
    }
};
