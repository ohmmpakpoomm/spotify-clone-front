import React from "react";

export default function Label({ children, label }) {
  return (
    <label className="text-white flex flex-col gap-2 w-[42%] pb-4">
      <span className="text-sm font-bold">{label}</span>
      {children}
    </label>
  );
}
