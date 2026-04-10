import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

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

      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[radial-gradient(circle_at_top,#eef4ff_0%,#ffffff_50%,#f8fafc_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="tech-grid absolute inset-0" />
          <div className="absolute left-[-8%] top-10 h-52 w-52 rounded-full bg-[#293796]/10 blur-3xl" />
          <div className="absolute right-[-8%] bottom-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our portfolio is built around real delivery work. Each project combines product thinking, interface design, and modern frontend execution to help brands present themselves with more clarity and more credibility online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {projects.map((project) => (
              <PortfolioCard
                key={project.title}
                imageSrc={project.imageSrc}
                title={project.title}
                client={project.client}
                description={project.description}
                tags={project.tags}
                websiteUrl={project.websiteUrl || undefined}
                status={project.status}
              />
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s create something extraordinary together.
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
