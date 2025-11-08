import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Next Oasis</h3>
            <p className="text-sm leading-relaxed">
              Building Innovative IT Solutions. At Next Oasis we offer a range of solutions tailored specifically to meet the needs of your organisation be it SME or Multi-national. Our team of experienced professionals will help your business achieve digital advantage across every business area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-app" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#tech-support" className="hover:text-white transition-colors">
                  Tech Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+447939542658"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+44 7939 542658</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nextoasis.co.uk"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@nextoasis.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="break-words">
                    <p>15 Rockstone Place</p>
                    <p>SO15 2EP Southampton, UK</p>
                    <p className="mt-1">Accra, Ghana</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Next Oasis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

