"use client";

import PageBanner from "@/components/PageBanner";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageBanner
        title="Get in Touch"
        subtitle="Let's discuss your project and bring your vision to life"
        imageSrc="/assets/images/business-person-using-laptop-multitasking-finish-daily-startup-tasks.webp"
        overlayType="dark"
      />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, need a consultation, or just want to learn more about our services, we'd love to hear from you. Get in touch and let's discuss how we can help your business grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#293796]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+447939542658"
                      className="text-[#293796] hover:text-[#1f2a6f] transition-colors"
                    >
                      +44 7939 542658
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#293796]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@nextoasis.co.uk"
                      className="text-[#293796] hover:text-[#1f2a6f] transition-colors"
                    >
                      info@nextoasis.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#293796]/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#293796]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Director Generals House<br />
                      15 Rockstone Place<br />
                      SO15 2EP Southampton, UK
                    </p>
                    <p className="text-gray-600 mt-2">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#293796] mr-2">1.</span>
                    <span>We'll review your message and get back to you within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#293796] mr-2">2.</span>
                    <span>We'll schedule a consultation to discuss your project in detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#293796] mr-2">3.</span>
                    <span>We'll provide a tailored proposal and timeline for your project</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293796] focus:border-transparent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293796] focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293796] focus:border-transparent outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293796] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-lg bg-[#293796] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#1f2a6f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#293796]"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

