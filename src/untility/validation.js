const validate = (val, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = emailValidator(val);
      case "minLength":
        isValid && minLengthValidator(val, rules[rule]);
      case "equalTo":
        isValid && equalToValidator(val, rules[rule]);
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const minLengthValidator = (val, minLength) => {
  return val.length > minLength;
};

const equalToValidator = (val, checkValue) => {
  return val === val;
};

export default validate;
