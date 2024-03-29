import React, { useState } from "react";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import validateChangePassword from "../validations/validate-changePassword";
import useAuth from "../../../hooks/use-auth";

const initial = {
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const [input, setInput] = useState(initial);
  const [isErr, setIsErr] = useState(null);

  const { changePassword } = useAuth();

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validateChangePassword(input);
      if (validateErr) {
        return setIsErr(validateErr);
      }
      const res = await changePassword(input);
      if (res?.response.status === 400) {
        setIsErr(res?.response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isErr && (
        <div className=" px-4 py-3 bg-red w-full">
          {isErr.message ? (
            <span className=" text-white text-sm font-medium">
              {isErr?.message},
            </span>
          ) : null}
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
