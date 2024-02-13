import React from "react";

export default function Container({ children }) {
  return (
    <div className=" h-[calc(100vh-100px)] overflow-scroll bg-gradient-to-b from-gray02 to-black18 flex flex-col justify-center items-center">
      <div className=" bg-black18 py-8 min-w-[730px] min-h-[60%] rounded-xl flex flex-col gap-4 items-center justify-evenly">
        {children}
      </div>
    </div>
  );
}
