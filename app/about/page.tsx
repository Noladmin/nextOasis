import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/Button";
import { CheckCircle, ArrowRight, Target, Zap, Heart, Ear, Brain, Code, RefreshCw, MessageSquare, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Next Oasis | Full-Service Digital Agency | UK & Ghana",
  description: "We are a full-service digital agency established to provide bespoke expert guidance and solutions for businesses to discover and utilise the true value of disruptive technology and transformation. Our mission, vision, and approach to digital innovation.",
  keywords: "about Next Oasis, digital agency UK, web development company Ghana, digital solutions studio, tech company Southampton, software development Accra, full-service digital agency, IT solutions provider, digital transformation experts",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Who We Are"
        subtitle="Bringing digital ideas to life with creativity and technology"
        imageSrc="/assets/images/online-shopping-concept.webp"
        overlayType="dark"
      />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We are a full-service digital agency established to provide bespoke expert guidance and solutions for businesses to discover and utilise the true value of disruptive technology and transformation. At Next Oasis we offer a range of solutions tailored specifically to meet the needs of your organisation be it SME or Multi-national. Our team of experienced professionals will help your business achieve digital advantage across every business area.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">Passion</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">Effectiveness</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">Integrity</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">Customer Focus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid - Our Approach */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Listen */}
              <div className="group relative bg-gradient-to-br from-[#293796] to-[#1f2a6f] rounded-2xl p-6 lg:p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <Ear className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Listen</h3>
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
                <h3 className="text-xl font-bold mb-2">Understand</h3>
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
                <h3 className="text-xl font-bold mb-2">Build</h3>
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
                <h3 className="text-xl font-bold mb-2">Refine</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <MessageSquare className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Communication</h3>
              <p className="text-gray-600 text-sm">Clear updates and open dialogue at every step of the journey.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <Clock className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">We deliver on time with precision and quality.</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <TrendingUp className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">Built for long-term growth and success.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <Target className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide innovative and comprehensive digital solutions through our expertise and helping businesses achieve their goals in the competitive digital landscape.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <Zap className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To help enterprises adopt technology in the most secured, efficient and cost effective manner, by providing bespoke and secured solutions that drive business innovation, agility and customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 mb-4">
                <Heart className="h-6 w-6 text-[#293796]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mandate</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping organizations focus on their core, while we power their backend, making them more competitive.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to bring your digital vision to life? Get in touch with us today.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

