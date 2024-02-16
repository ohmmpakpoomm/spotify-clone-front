import React from "react";

export default function ContentContainer({ children }) {
  return (
    <div className="w-full h-full text-white col-start-2 col-end-5 row-start-1 row-end-7 overflow-hidden px-4 py-2 bg-gradient-to-b from-gray012 to-gray008 rounded-lg">
      {children}
    </div>
  );
}
