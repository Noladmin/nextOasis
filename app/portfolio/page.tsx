import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Portfolio - Next Oasis | High-Quality Digital Experiences & Projects",
  description: "We've helped brands and startups craft high-quality digital experiences — from responsive websites to full-featured mobile apps. Every project reflects precision, performance, and thoughtful design. Explore our work.",
  keywords: "web development portfolio, mobile app portfolio, UI/UX design portfolio, digital agency work, Next Oasis projects, website examples, app development examples, e-commerce projects, SaaS projects, mobile banking apps",
};

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        title="Our Work Speaks for Itself"
        subtitle="High-quality digital experiences that drive results"
        imageSrc="/assets/images/black-girl-engages-with-virtual-reality-while-partner-works-laptop-desk.webp"
        overlayType="dark"
      />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've helped brands and startups craft high-quality digital experiences — from responsive websites to full-featured mobile apps. Every project reflects precision, performance, and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Portfolio items - replace with actual project data */}
            <PortfolioCard
              imageSrc="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
              title="E-Commerce Platform"
              description="A modern e-commerce solution with seamless checkout and inventory management."
              tags={["Web Development", "UI/UX Design"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/black-girl-engages-with-virtual-reality-while-partner-works-laptop-desk.webp"
              title="Mobile Banking App"
              description="Secure mobile banking application with biometric authentication and real-time transactions."
              tags={["Mobile App", "iOS", "Android"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/online-shopping-concept.webp"
              title="SaaS Dashboard"
              description="Analytics dashboard with real-time data visualization and custom reporting."
              tags={["Web Development", "React", "Next.js"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
              title="Healthcare Portal"
              description="Patient management system with appointment scheduling and medical records."
              tags={["Web Development", "Healthcare"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/black-girl-engages-with-virtual-reality-while-partner-works-laptop-desk.webp"
              title="Fitness Tracking App"
              description="Cross-platform fitness app with workout plans and progress tracking."
              tags={["Mobile App", "React Native"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/online-shopping-concept.webp"
              title="Real Estate Platform"
              description="Property listing platform with virtual tours and advanced search filters."
              tags={["Web Development", "UI/UX"]}
              websiteUrl="https://example.com"
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's create something extraordinary together.
            </p>
            <Button href="/contact" variant="primary">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

