import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import validateRegister from "../validations/validate-register";

const initial = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const [input, setInput] = useState(initial);
  const [isErr, setIsErr] = useState({});

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateRegister(input);
      console.log(validateErr);
      if (validateErr) {
        return setIsErr(validateErr);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isErr && <div>[isErr?.firstName,isErr?.lastName]</div>}
      <form
        onSubmit={hdlSubmit}
        className="flex flex-col w-full items-center justify-center"
      >
        <Label label="First name">
          <Input
            type="text"
            placeholder="First name"
            name="firstName"
            value={input.firstName}
            onChange={hdlChangeInput}
          />
        </Label>
        <Label label="Last name">
          <Input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={input.lastName}
            onChange={hdlChangeInput}
          />
        </Label>
        <Label label="Email or mobile">
          <Input
            type="text"
            placeholder="Email or mobile"
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={hdlChangeInput}
          />
        </Label>
        <Label label="Password">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hdlChangeInput}
          />
        </Label>
        <Label label="Confirm password">
          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChangeInput}
          />
        </Label>
        <button
          type="submit"
          className="bg-green w-[42%] px-4 py-3 rounded-full my-8"
        >
          Register
        </button>
      </form>
    </>
  );
}
