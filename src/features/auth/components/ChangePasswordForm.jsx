import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import validateChangePassword from "../validations/validate-changePassword";

const initial = {
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const [input, setInput] = useState(initial);
  const [isErr, setIsErr] = useState(null);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateChangePassword(input);
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
          {isErr.emailOrMobile ? (
            <span className=" text-white text-sm font-medium">
              {isErr?.emailOrMobile},
            </span>
          ) : null}
          {isErr.password ? (
            <span className=" text-white text-sm font-medium">
              {isErr?.password},
            </span>
          ) : null}
          {isErr.confirmPassword ? (
            <span className=" text-white text-sm font-medium">
              {isErr?.confirmPassword},
            </span>
          ) : null}
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
        <Label label="New password">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hdlChangeInput}
          />
        </Label>
        <Label label="Confirm new password">
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
          Change password
        </button>
      </form>
    </>
  );
}
