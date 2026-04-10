import Image from "next/image";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import Link from "next/link";

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  client?: string;
  description: string;
  tags?: string[];
  websiteUrl?: string;
  status?: string;
}

export default function PortfolioCard({
  imageSrc,
  title,
  client,
  description,
  tags = [],
  websiteUrl,
  status = "Project showcase",
}: PortfolioCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_48px_rgba(15,23,42,0.1)]">
      <div className="relative flex h-full flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
              <span className="h-2 w-2 rounded-full bg-[#293796]" />
              {status}
            </div>
            {client && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {client}
              </p>
            )}
          </div>

          <div className="h-11 w-11" />
        </div>

        <div className="relative mb-6 overflow-hidden rounded-[20px] border border-slate-200 bg-slate-950 p-2">
          <div className="relative z-10 mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-[11px] font-medium text-white/80">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            </div>
            <div className="flex items-center gap-1.5 uppercase tracking-[0.2em] text-white/65">
              <Layers3 className="h-3.5 w-3.5" />
              Project Preview
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] border border-white/10 bg-slate-900">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            {title}
          </h3>
          <p className="mb-5 text-sm leading-6 text-slate-600 sm:text-[15px]">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ExternalLink className="h-4 w-4" />
              Live project
            </div>
            {websiteUrl ? (
              <Link
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#293796]"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                Pending URL
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
