// src/components/ui/button.js

import React from "react";
import clsx from "clsx";

export const Button = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
