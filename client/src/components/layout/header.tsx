import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const [location] = useLocation();

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
      {/* Desktop Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 hidden lg:block">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                SaiVortex
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === "/" ? "text-brand-purple" : "text-gray-700 hover:text-brand-purple"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-purple">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64 space-y-2">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            href={service.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                          >
                            {service.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/portfolio"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === "/portfolio" ? "text-brand-purple" : "text-gray-700 hover:text-brand-purple"
                    }`}
                  >
                    Portfolio
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/student-resources"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === "/student-resources" ? "text-brand-purple" : "text-gray-700 hover:text-brand-purple"
                    }`}
                  >
                    Student Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === "/about" ? "text-brand-purple" : "text-gray-700 hover:text-brand-purple"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === "/contact" ? "text-brand-purple" : "text-gray-700 hover:text-brand-purple"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button className="bg-brand-gradient text-white hover:opacity-90">
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 lg:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-7 w-7 mr-2" />
            <span className="text-lg font-bold bg-brand-gradient bg-clip-text text-transparent">
              SaiVortex
            </span>
          </Link>
          <Button variant="ghost" size="sm" onClick={onMobileMenuToggle}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}
