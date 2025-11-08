import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BrandsSection from "@/components/BrandsSection";
import StatsCard from "@/components/StatsCard";
import PortfolioCard from "@/components/PortfolioCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle,
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
  // Brands/Partners we've worked with
  const brands: Array<{ src: string; alt: string; name?: string }> = [
    {
      src: "/assets/brands/SouthLogo.png",
      alt: "South Town Catering Services",
      name: "South Town Catering Services",
    },
    {
      src: "/assets/brands/TastyBowlsLogo.png",
      alt: "Tasty Bowls",
      name: "Tasty Bowls",
    },
    // Add more brand logos here
    // Example:
    // { src: "/assets/brands/brand2.png", alt: "Brand Name 2", name: "Brand Name 2" },
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
              Let's Build Your Project
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Work Speaks for Itself
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We've helped brands and startups craft high-quality digital experiences — from responsive websites to full-featured mobile apps. Every project reflects precision, performance, and thoughtful design.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <PortfolioCard
              imageSrc="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
              title="E-Commerce Platform"
              description="A modern e-commerce solution with seamless checkout and inventory management for retail businesses."
              tags={["Web Development", "UI/UX Design"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/black-girl-engages-with-virtual-reality-while-partner-works-laptop-desk.webp"
              title="Mobile Banking App"
              description="Secure mobile banking application with biometric authentication and real-time transaction processing."
              tags={["Mobile App", "iOS", "Android"]}
              websiteUrl="https://example.com"
            />
            <PortfolioCard
              imageSrc="/assets/images/online-shopping-concept.webp"
              title="SaaS Dashboard"
              description="Analytics dashboard with real-time data visualization and custom reporting features for businesses."
              tags={["Web Development", "React", "Next.js"]}
              websiteUrl="https://example.com"
            />
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
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to partner with businesses to create digital products that work. Here's what a few of them have to say:
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={100}>
            <TestimonialCarousel
            testimonials={[
              {
                quote: "I recently used Next Oasis for our Corporate Design project and they exceeded my expectations. Their work is outstanding and turnaround amazing. I would not hesitate to recommend them to anyone.",
                author: "Shula Duku",
              },
              {
                quote: "Thank you for your efficient and professional service. And more importantly the result we got at the end of the Project.",
                author: "James Achnif",
              },
              {
                quote: "I've been using Next Oasis for the past years, and I can't express how much it has transformed the way I run my business. The user-friendly interface and robust features have made managing my projects a breeze.",
                author: "Philip Dah",
              },
            ]}
            autoPlay={true}
            autoPlayInterval={5000}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Brands Section */}
      {brands.length > 0 && (
        <BrandsSection
          title="Trusted by Leading Brands"
          subtitle="We're proud to work with innovative companies and help bring their digital visions to life"
          brands={brands}
        />
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#293796] to-[#1f2a6f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4">
            Let's turn your vision into a scalable, high-performance digital product.
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
