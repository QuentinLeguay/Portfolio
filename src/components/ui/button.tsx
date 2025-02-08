import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps & { name?: string }> = ({ children, variant = "default", name, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-white text-white hover:text-black hover:bg-gray-500",
    ghost: "text-gray-400 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} aria-label={name} {...props}>
      {children}
    </button>
  );
};

export default Button;
