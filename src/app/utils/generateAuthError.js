export function generateAuthError(errorMessage) {
    switch (errorMessage) {
        case "EMAIL_NOT_FOUND" || "INVALID_PASSWORD":
            return "Неверный E-mail или пароль";

        default:
            break;
    }
}
