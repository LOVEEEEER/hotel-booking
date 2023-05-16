export function generateAuthError(errorMessage: string) {
  switch (errorMessage) {
    case "EMAIL_NOT_FOUND":
      return "Неверный E-mail или пароль";
    case "INVALID_PASSWORD":
      return "Неверный E-mail или пароль";
    case "EMAIL_EXISTS":
      return "Даннный E-mail занят";
    default:
      break;
  }
  return "Не удается войти в аккаунт. Повторите попытку позже.";
}
