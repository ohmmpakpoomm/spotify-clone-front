import React from "react";

export default function HomePageLayout({ children }) {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-2 p-2 h-[90vh] overflow-hidden bg-gray004">
      {children}
    </div>
  );
}
