import React from "react";

export default function ContentContainer({ children }) {
  return (
    <div className="text-white col-span-3 row-span-8 px-4 py-2 bg-gradient-to-b from-gray012 to-gray008 rounded-lg">
      {children}
    </div>
  );
}
