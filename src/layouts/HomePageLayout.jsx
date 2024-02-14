import React from "react";

export default function HomePageLayout({ children }) {
  return (
    <div className="grid grid-cols-5 grid-rows-8 gap-2 p-2 h-[90vh] bg-gray004">
      {children}
    </div>
  );
}
