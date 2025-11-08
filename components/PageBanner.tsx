import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  overlayType?: "dark" | "blue";
}

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  overlayType = "dark",
}: PageBannerProps) {
  const overlayClass =
    overlayType === "blue"
      ? "bg-[#293796]/70"
      : "bg-black/60";

  return (
    <div
      className={`relative text-white overflow-hidden ${
        imageSrc ? "" : "bg-gradient-to-r from-[#293796] to-[#1f2a6f]"
      }`}
    >
      {imageSrc && (
        <>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          {/* Overlay */}
          <div className={`absolute inset-0 z-10 ${overlayClass}`}></div>
        </>
      )}
      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

