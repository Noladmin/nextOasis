import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#293796]/30 shadow-sm hover:shadow-xl transition-all duration-300 p-6 lg:p-8 h-full overflow-hidden">
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#293796]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#293796] to-[#1f2a6f] mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#293796] transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-base">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-[#293796] mr-3 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

