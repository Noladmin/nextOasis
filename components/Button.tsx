import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap min-h-[44px] sm:min-h-[48px]";
  
  const variantClasses = {
    primary: "bg-[#293796] text-white hover:bg-[#1f2a6f] focus:ring-[#293796]",
    secondary: "bg-white text-[#293796] border-2 border-[#293796] hover:bg-gray-50 focus:ring-[#293796]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

