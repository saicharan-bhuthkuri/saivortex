import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold">SaiVortex</span>
            </div>
            <p className="text-gray-400 mb-4">Transforming Technology with Integrity and Innovation</p>
            <p className="text-gray-400 text-sm">Founded in 2024 by Saicharan Bhuthkuri</p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/hardware" className="hover:text-white transition-colors">Hardware Solutions</Link></li>
              <li><Link href="/services/software" className="hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link href="/services/projects" className="hover:text-white transition-colors">Project Works</Link></li>
              <li><Link href="/services/media" className="hover:text-white transition-colors">Media Services</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <span>+91 6301133456</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>saivortex.dev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 SaiVortex. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
