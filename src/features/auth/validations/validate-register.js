import joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = joi.object({
  firstName: joi.string().required().trim().messages({
    "any.required": "first name is required",
    "string.empty": "first name is required",
  }),
  lastName: joi.string().required().trim().messages({
    "any.required": "last name is required",
    "string.empty": "last name is required",
  }),
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
    }),
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
  confirmPassword: joi.string().required().valid(joi.ref("password")).messages({
    "any.required": "confirm password is required",
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);

export default validateRegister;
