export const validatorConfig = {
    comment: {
        isRequired: {
            message: "Нельзя отправить пустой отзыв"
        },
        min: {
            message: "Отзыв слишком маленький",
            params: 40
        }
    },
    rate: {
        isRequired: {
            message: "Оцените от 1 до 5"
        }
    }
};
