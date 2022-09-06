export const validator = (data, config) => {
  const errors = {};
  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (data === "") return config.message;
        break;
      case "isEmail":
        if (!/^\S+@\S+\.\S+$/g.test(data)) return config.message;
        break;
      case "isContainDigit":
        if (!/\d/g.test(data)) return config.message;
        break;
      case "isContainCapitalSymbol":
        if (!/[A-Z]/g.test(data)) return config.message;
        break;
      case "min":
        if (data.length < config.params) return config.message;
        break;
      case "isEnd":
        if (!/[A-Z]+/g.test(data)) return config.message;
        break;
      default:
    }
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
};
