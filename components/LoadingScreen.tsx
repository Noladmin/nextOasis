"use client";

import LoadingLogo from "./LoadingLogo";

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <LoadingLogo size="lg" />
      {message && (
        <p className="mt-6 text-lg font-medium text-gray-600 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}

