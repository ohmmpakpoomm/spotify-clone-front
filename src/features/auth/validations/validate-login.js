import joi from "joi";
import validate from "../../../utils/validate";

const loginSchema = joi.object({
  emailOrMobile: joi
    .alternatives([
      joi.string().email({ tlds: false }),
      joi.string().pattern(/^[0-9]{10}$/),
    ])
    .required()
    .messages({
      "any.required": "email address or mobile number is required",
      "string.empty": "email address or mobile number is required",
      "alternatives.match": "invalid email address or mobile number",
    })
    .strip(),
  password: joi
    .string()
    .pattern(/^[a-zA-Z0-9]{6,20}$/)
    .required()
    .messages({
      "any.required": "password is required",
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be 6-20 characters and contain only alphabet and number",
    }),
  email: joi
    .string()
    .forbidden()
    .when("emailOrMobile", {
      is: joi.string().email({ tlds: false }),
      then: joi.string().default(joi.ref("emailOrMobile")),
    }),
  mobile: joi
    .string()
    .forbidden()
    .when("emailOrMobile", {
      is: joi.string().pattern(/^[0-9]{10}$/),
      then: joi.string().default(joi.ref("emailOrMobile")),
    }),
});
const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
