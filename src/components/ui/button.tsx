import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    ghost: "text-gray-400 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
