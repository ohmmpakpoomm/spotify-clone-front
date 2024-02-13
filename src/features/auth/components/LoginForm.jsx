import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import validateLogin from "../validations/validate-login";

const initial = {
  emailOrMobile: "",
  password: "",
};
export default function LoginForm() {
  const [input, setInput] = useState(initial);
  const [isErr, setIsErr] = useState(null);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateLogin(input);
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
      {isErr && (
        <div className=" px-4 py-3 bg-red w-full">
          <span className=" text-white text-sm font-medium">
            Incorrect username or password.
          </span>
        </div>
      )}
      <form
        onSubmit={hdlSubmit}
        className="flex flex-col w-full items-center justify-center"
      >
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
        <button
          type="submit"
          className="bg-green w-[42%] px-4 py-3 rounded-full my-8"
        >
          Log in
        </button>
        <Link to="/forgot-password" className="text-white underline">
          Forgot your password?
        </Link>
      </form>
    </>
  );
}
