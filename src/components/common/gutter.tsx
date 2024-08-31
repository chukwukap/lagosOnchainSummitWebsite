import React from "react";

export default function Gutter({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1  borderd border-yellow-600`}
    >
      {children}
    </div>
  );
}
