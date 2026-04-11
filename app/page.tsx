import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import ServicesCarousel from "@/components/ServicesCarousel";
import StatsCard from "@/components/StatsCard";
import PortfolioCard from "@/components/PortfolioCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { featuredProjects } from "@/data/projects";
import {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  ArrowRight,
  Users,
  CheckCircle2,
  Ear,
  Brain,
  Code,
  RefreshCw,
  MessageSquare,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Next Oasis - Building Innovative IT Solutions | Digital Agency UK & Ghana",
  description: "At Next Oasis we offer a range of solutions tailored specifically to meet the needs of your organisation be it SME or Multi-national. Our team of experienced professionals will help your business achieve digital advantage across every business area. Web development, mobile apps, UI/UX design, and tech support.",
  keywords: "IT solutions UK, digital agency UK, web development agency, mobile app development company, UI/UX design services, tech support consulting, digital transformation, SME solutions, multi-national IT services, Next.js development, React development, Southampton digital agency, Accra web developers",
};

export default function Home() {
  const clientProof = [
    {
      name: "South Town Catering Services",
      logoSrc: "/assets/brands/SouthLogo.png",
      role: "CEO",
      summary: "Approved testimonial from this client will be added here.",
      facts: ["Testimonial pending", "Live customer project", "Payments integrated"],
    },
    {
      name: "Tasty Bowls",
      logoSrc: "/assets/brands/TastyBowlsLogo.png",
      role: "CEO",
      summary: "Approved testimonial from this client will be added here.",
      facts: ["Testimonial pending", "Real business client", "Live production website"],
    },
    {
      name: "Next Oasis Care",
      logoSrc: "/assets/brands/nextOasisCare.png",
      role: "CEO",
      summary: "Approved testimonial from this client will be added here.",
      facts: ["Testimonial pending", "Healthcare staffing", "Live production website"],
    },
    {
      name: "Zebral Global Integrated Services",
      logoSrc: "/assets/brands/Zebra.png",
      role: "CEO",
      summary: "Approved testimonial from this client will be added here.",
      facts: ["Testimonial pending", "Corporate services", "Live production website"],
    },
    {
      name: "Ascension Anglican Church, Houston TX",
      logoSrc: "/assets/brands/Ascension.webp",
      role: "Church Leadership",
      summary: "Approved testimonial from this client will be added here.",
      facts: ["Testimonial pending", "Church website", "Live production website"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
            alt="Business person using laptop"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Building Innovative IT Solutions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            At Next Oasis we offer a range of solutions tailored specifically to meet the needs of your organisation be it SME or Multi-national. Our team of experienced professionals will help your business achieve digital advantage across every business area.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Let&apos;s Build Your Project
            </Button>
            <Button href="/portfolio" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards - Bridging between Hero and About */}
      <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <StatsCard
              icon={Users}
              label="Happy Clients"
              value="500+"
            />
            <StatsCard
              icon={CheckCircle2}
              label="Projects Done"
              value="1000+"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We are a full-service digital agency established to provide bespoke expert guidance and solutions for businesses to discover and utilise the true value of disruptive technology and transformation.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Bento Grid - Our Approach */}
          <AnimateOnScroll delay={100}>
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Listen */}
              <div className="group relative bg-gradient-to-br from-[#293796] to-[#1f2a6f] rounded-2xl p-6 lg:p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <Ear className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Listen</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  We start by understanding your vision, goals, and challenges through active listening and discovery sessions.
                </p>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Understand */}
              <div className="group relative bg-gradient-to-br from-[#293796]/90 to-[#1f2a6f]/90 rounded-2xl p-6 lg:p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Understand</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Deep analysis of requirements, market context, and technical feasibility to create the perfect solution.
                </p>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Build */}
              <div className="group relative bg-gradient-to-br from-[#293796] to-[#1f2a6f] rounded-2xl p-6 lg:p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Build</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Agile development with modern technologies, ensuring quality, performance, and scalability from day one.
                </p>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Refine */}
              <div className="group relative bg-gradient-to-br from-[#293796]/90 to-[#1f2a6f]/90 rounded-2xl p-6 lg:p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Refine</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Continuous improvement through testing, feedback, and iteration to deliver excellence.
                </p>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <MessageSquare className="h-6 w-6 text-[#293796]" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Transparent Communication</h4>
              <p className="text-gray-600 text-sm">Clear updates and open dialogue at every step of the journey.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <Clock className="h-6 w-6 text-[#293796]" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Timely Delivery</h4>
              <p className="text-gray-600 text-sm">We deliver on time with precision and quality.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <TrendingUp className="h-6 w-6 text-[#293796]" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Scalable Solutions</h4>
              <p className="text-gray-600 text-sm">Built for long-term growth and success.</p>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions to help your business thrive
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <div className="mx-auto max-w-4xl">
              <ServicesCarousel>
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
              </ServicesCarousel>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[radial-gradient(circle_at_top,#eef4ff_0%,#ffffff_50%,#f8fafc_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="tech-grid absolute inset-0" />
          <div className="absolute left-[-10%] top-12 h-48 w-48 rounded-full bg-[#293796]/10 blur-3xl" />
          <div className="absolute right-[-8%] bottom-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Work Speaks for Itself
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real client work, presented with the same attention to usability, performance, and visual execution that we bring into every delivery. These featured builds show how strategy, design, and engineering come together in practice.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {featuredProjects.map((project) => (
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
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="text-center">
              <Button href="/portfolio" variant="primary">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Approved client testimonials will be added here. For now, this section is reserved for feedback from real businesses we have worked with.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mx-auto max-w-4xl">
              <ServicesCarousel slideClassName="min-w-0 flex-[0_0_100%] pl-3">
                {clientProof.map((client) => (
                  <article
                    key={client.name}
                    className="flex h-full min-h-[320px] flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] lg:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold tracking-[0.24em] text-slate-400">
                          {String(clientProof.indexOf(client) + 1).padStart(2, "0")}
                        </span>
                        <div className="flex min-h-16 items-center">
                          <Image
                            src={client.logoSrc}
                            alt={client.name}
                            width={170}
                            height={68}
                            className="h-auto max-h-14 w-auto object-contain"
                          />
                        </div>
                      </div>
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                        Pending quote
                      </span>
                    </div>

                    <div className="mb-5 space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                        {client.name}
                      </h3>
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                        {client.role}, {client.name}
                      </p>
                      <p className="text-sm italic leading-6 text-slate-600 sm:text-[15px]">
                        {client.summary}
                      </p>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {client.facts.map((fact) => (
                        <span
                          key={fact}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {fact}
                        </span>
                      ))}
                    </div>

                  </article>
                ))}
              </ServicesCarousel>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#293796] to-[#1f2a6f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4">
            Let&apos;s turn your vision into a scalable, high-performance digital product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button href="/contact" variant="primary">
              Get Your Free Quote
            </Button>
            <Button href="/contact" variant="secondary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
