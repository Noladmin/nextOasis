import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags?: string[];
  websiteUrl?: string;
}

export default function PortfolioCard({
  imageSrc,
  title,
  description,
  tags = [],
  websiteUrl,
}: PortfolioCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/80 transition-colors"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm lg:text-base mb-4 line-clamp-2">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Arrow UI - Top Right */}
        {websiteUrl && (
          <Link
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-[#293796] rounded-full flex items-center justify-center text-white hover:bg-[#1f2a6f] transition-all group-hover:scale-110 shadow-lg"
            aria-label={`Visit ${title} website`}
          >
            <ArrowUpRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </Link>
        )}
      </div>
    </div>
  );
}

