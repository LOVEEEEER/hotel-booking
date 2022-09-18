export const validator = (data, config) => {
  const errors = {};
  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (!Boolean(data)) return config.message;
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
      case "isDate":
        if (
          !/^(?=\d{2}([-.,\/])\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/g.test(
            data
          )
        )
          return config.message;
        break;

      default:
        return config.message;
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
