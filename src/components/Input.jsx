import React from "react";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      className="w-full bg-black18 focus:outline-none hover:border-white px-4 py-2.5 border border-gray05 rounded text-white"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
