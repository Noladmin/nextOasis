import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
  name?: string;
}

export default function BrandLogo({ src, alt, name }: BrandLogoProps) {
  return (
    <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={100}
        className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto object-contain"
      />
    </div>
  );
}

