interface TestimonialCardProps {
  quote: string;
  author?: string;
  company?: string;
}

export default function TestimonialCard({
  quote,
  author,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 h-full">
      <div className="mb-3 sm:mb-4">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#293796]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
        </svg>
      </div>
      <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
        {quote}
      </blockquote>
      {(author || company) && (
        <div className="text-xs sm:text-sm text-gray-600">
          {author && <p className="font-semibold">{author}</p>}
          {company && <p>{company}</p>}
        </div>
      )}
    </div>
  );
}

