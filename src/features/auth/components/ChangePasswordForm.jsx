import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Label from "../../../components/Label";

const initial = {
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};
export default function ChangePasswordForm() {
  const [input, setInput] = useState(initial);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
  );
}
