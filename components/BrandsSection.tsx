import BrandLogo from "./BrandLogo";

interface Brand {
  src: string;
  alt: string;
  name?: string;
}

interface BrandsSectionProps {
  title?: string;
  subtitle?: string;
  brands: Brand[];
}

export default function BrandsSection({
  title = "Trusted by Leading Brands",
  subtitle = "We're proud to work with innovative companies and help bring their digital visions to life",
  brands,
}: BrandsSectionProps) {
  if (brands.length === 0) {
    return null;
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {brands.map((brand, index) => (
            <BrandLogo
              key={index}
              src={brand.src}
              alt={brand.alt}
              name={brand.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

