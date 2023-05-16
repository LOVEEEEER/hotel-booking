import { DataType } from "../types/types";
import { getFullYearByTimeStamp } from "./dateService";

export type ValidatorConfigType = {
    [key: string]: {
        [key: string]: {
            message: string;
            params?: number;
        };
    };
};

export function validator(data: DataType, config: ValidatorConfigType) {
    const errors: DataType = {};
    function validate(
        validateMethod: string,
        data: string,
        config: { message: string; params?: number }
    ) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof data === "string" && data.trim() === "") {
                    statusValidate = config.message;
                }
                break;
            case "isEmail":
                if (!/^\S+@\S+\.\S+$/g.test(data)) {
                    statusValidate = config.message;
                }
                break;
            case "isContainCapitalSymbol":
                if (!/[A-Z]/g.test(data)) return config.message;
                break;
            case "isContainDigit":
                if (!/\d/g.test(data)) {
                    statusValidate = config.message;
                }
                break;
            case "min":
                if (data.toString().length < Number(config.params)) {
                    statusValidate = config.message;
                }
                break;
            case "max":
                if (data.toString().length > Number(config.params)) {
                    statusValidate = config.message;
                }
                break;
            case "isCorrectDate": {
                if (data.toString() === "Invalid Date") return config.message;
                break;
            }
            case "isAdult": {
                if (data) {
                    const fullYears = getFullYearByTimeStamp(
                        Date.now() - new Date(data).getTime()
                    );
                    if (fullYears < config.params!) {
                        return config.message;
                    }
                }
                break;
            }

            default:
                statusValidate = config.message;
        }
        return statusValidate;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (!errors[fieldName] && error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
