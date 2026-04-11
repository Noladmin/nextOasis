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
    <article className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#293796]/30 hover:shadow-lg lg:min-h-[360px] lg:p-6">
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#293796]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#293796] to-[#1f2a6f] transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div className="mb-4 space-y-2.5">
          <h3 className="max-w-[22ch] text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#293796] lg:text-[1.35rem]">
            {title}
          </h3>
          <p className="text-sm leading-6 text-gray-600 lg:text-[15px]">
            {description}
          </p>
        </div>

        {features && features.length > 0 && (
          <div className="mt-auto border-t border-slate-100 pt-5">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm leading-5 text-gray-600">
                  <span className="mt-0.5 text-[#293796]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
