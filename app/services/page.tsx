import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { Globe, Smartphone, Palette, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Next Oasis | Comprehensive Digital Solutions for Your Business",
  description: "With over a decade of experience, we have helped businesses of all sizes establish a strong online presence, engage with customers, and drive business growth. Web development, mobile apps, UI/UX design, and tech support services.",
  keywords: "web development services UK, mobile app development, UI/UX design services, tech support consulting, React development, Next.js development, React Native apps, custom website development, e-commerce development, SaaS development, responsive web design",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive digital solutions designed to grow your business"
        imageSrc="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
        overlayType="dark"
      />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience, we have helped businesses of all sizes establish a strong online presence, engage with customers, and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <ServiceCard
              icon={Globe}
              title="Web Development"
              description="We craft websites that are not only visually stunning but also fast, secure, and search-engine optimized. Whether it's a landing page, e-commerce store, or SaaS platform, we design with performance and scalability in mind."
              features={[
                "Modern frameworks like React, Vite, Next.js",
                "Mobile-first responsive design",
                "Optimized for speed and SEO",
                "Custom backend or CMS integration",
                "Seamless deployment & ongoing support",
              ]}
            />
            
            <ServiceCard
              icon={Smartphone}
              title="Mobile App Development"
              description="Our team creates intuitive mobile apps that delight users across iOS and Android. From concept to launch, we ensure your app is reliable, fast, and built to scale."
              features={[
                "Cross-platform development with React Native / Expo",
                "Smooth, offline-ready experiences",
                "Push notifications and real-time updates",
                "API integrations and cloud support",
                "App store submission and guidance",
              ]}
            />
            
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              description="We transform ideas into user-centric designs that are visually striking and easy to navigate. Every interface we create is built for engagement and usability."
              features={[
                "Wireframes & interactive prototypes",
                "Complete UI kits & style guides",
                "Optimized user flows",
                "High-fidelity mockups",
                "Redesigns that improve conversion and usability",
              ]}
            />
            
            <ServiceCard
              icon={Wrench}
              title="Tech Support & Consulting"
              description="We help businesses maintain, optimize, and scale their digital products. From troubleshooting to strategic advice, we're your reliable tech partner."
              features={[
                "Website & app maintenance",
                "Bug fixing & troubleshooting",
                "Hosting, deployment, and upgrades",
                "Digital strategy & roadmap consulting",
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help bring your digital vision to life.
            </p>
            <Button href="/contact" variant="primary">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

