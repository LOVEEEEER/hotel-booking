export function getRoomTypeName(type: string) {
  switch (type) {
    case "president":
      return "Президентский";
    case "balcony":
      return "С балконом";
    case "studio":
      return "Студия";
    case "lovers":
      return "Для пар";
    case "business":
      return "Бизнес";
    case "luxury":
      return "Люкс";

    default:
      return type;
  }
}
