import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Wrench, Settings, Zap, ArrowRight } from "lucide-react";

export default function HardwareSolutions() {
  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "PC/Laptop Repair",
      description: "Professional repair services for desktop computers and laptops including motherboard repair, power supply replacement, and hardware troubleshooting.",
      href: "/services/hardware/repair"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Device Configuration",
      description: "Complete system setup and configuration services including OS installation, software setup, driver installation, and performance optimization.",
      href: "/services/hardware/configuration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Troubleshooting & Upgrades",
      description: "Hardware diagnostics, performance upgrades, memory expansion, storage upgrades, and system optimization for improved performance.",
      href: "/services/hardware/upgrades"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Hardware Solutions" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-wrench text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hardware Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hardware services to keep your technology running smoothly. From repairs to upgrades, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="bg-brand-gradient p-3 rounded-lg w-fit mb-4 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                {/* Sub-services for Computer/Laptop Repair */}
                {service.title === "Computer Repair & Maintenance" && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      <Link href="/services/hardware/computer-repair">
                        <div className="text-xs bg-blue-50/80 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100/80 transition-colors cursor-pointer border border-blue-200/50">
                          Desktop Repair Services →
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
                {service.title === "Laptop Services" && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      <Link href="/services/hardware/laptop-repair">
                        <div className="text-xs bg-purple-50/80 text-purple-700 px-3 py-2 rounded-lg hover:bg-purple-100/80 transition-colors cursor-pointer border border-purple-200/50">
                          Professional Laptop Repair →
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
                
                <Link href={service.href} className="text-brand-purple font-medium text-sm hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Hardware Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-tools text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-clock text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600 text-sm">Fast and efficient repair services</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-shield-alt text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">All repairs come with warranty</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-dollar-sign text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Affordable rates for quality service</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Hardware Support?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our hardware experts are ready to help with repairs, upgrades, and configurations. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Request Service
              </Button>
            </Link>
            <a href="tel:+916301133456">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Call Now: +91 6301133456
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
