import { ValidatorConfigType } from "./../../../../utils/validator";

export const validatorConfig: ValidatorConfigType = {
    entry: {
        isRequired: {
            message: "Введите корректную дату"
        }
    },
    departure: {
        isRequired: {
            message: "Введите корректную дату"
        }
    }
};
