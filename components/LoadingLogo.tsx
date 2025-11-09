"use client";

import Image from "next/image";

interface LoadingLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingLogo({ size = "md", className = "" }: LoadingLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24 sm:w-32 sm:h-32",
    lg: "w-40 h-40 sm:w-48 sm:h-48",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 animate-pulse opacity-20">
          <div className="w-full h-full rounded-full bg-[#293796] blur-xl"></div>
        </div>
        <Image
          src="/assets/brands/logo.png"
          alt="Next Oasis"
          fill
          className="object-contain animate-spin-slow"
          priority
        />
      </div>
    </div>
  );
}

