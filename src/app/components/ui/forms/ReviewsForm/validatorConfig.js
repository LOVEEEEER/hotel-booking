export const validatorConfig = {
    review: {
        isRequired: {
            message: "Нельзя отправить пустой отзыв"
        },
        min: {
            message: "Отзыв слишком маленький",
            params: 40
        }
    }
};
