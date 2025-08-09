import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  Home, 
  Settings, 
  MessageCircle, 
  GraduationCap, 
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { title: "Hardware Solutions", href: "/services/hardware" },
    { title: "Software Solutions", href: "/services/software" },
    { title: "Project Works", href: "/services/projects" },
    { title: "Document Services", href: "/services/documents" },
    { title: "Media Services", href: "/services/media" },
    { title: "Brand & Social Media", href: "/services/brand-social" },
    { title: "Event Organizing", href: "/services/events" },
    { title: "Student Services", href: "/services/student" },
  ];

  return (
    <>
      {/* Slide-out menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
          <div className="p-4 border-b flex items-center justify-between">
            <span className="font-semibold text-lg">Menu</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-4">
            <Link href="/" onClick={onClose} className="block py-2 text-gray-700 font-medium">
              Home
            </Link>
            
            <div className="space-y-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-2 text-gray-700 font-medium flex items-center justify-between"
              >
                Services
                {servicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={onClose}
                      className="block py-1 text-sm text-gray-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/portfolio" onClick={onClose} className="block py-2 text-gray-700 font-medium">
              Portfolio
            </Link>
            <Link href="/student-resources" onClick={onClose} className="block py-2 text-gray-700 font-medium">
              Student Resources
            </Link>
            <Link href="/about" onClick={onClose} className="block py-2 text-gray-700 font-medium">
              About
            </Link>
            <Link href="/contact" onClick={onClose} className="block py-2 text-gray-700 font-medium">
              Contact
            </Link>
            
            <Button className="w-full bg-brand-gradient text-white font-medium mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40">
        <div className="grid grid-cols-5 h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-brand-purple">
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/services/hardware" className="flex flex-col items-center justify-center text-gray-600">
            <Settings className="h-5 w-5 mb-1" />
            <span className="text-xs">Services</span>
          </Link>
          <a 
            href="https://wa.me/916301133456" 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center text-gray-600"
          >
            <div className="bg-brand-gradient p-2 rounded-full mb-1">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs">Chat</span>
          </a>
          <Link href="/student-resources" className="flex flex-col items-center justify-center text-gray-600">
            <GraduationCap className="h-5 w-5 mb-1" />
            <span className="text-xs">Student</span>
          </Link>
          <button onClick={() => {}} className="flex flex-col items-center justify-center text-gray-600">
            <Menu className="h-5 w-5 mb-1" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}
