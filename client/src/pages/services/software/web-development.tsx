import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Globe, Code, Rocket, Smartphone } from "lucide-react";

export default function WebDevelopment() {
  const technologies = [
    { name: "React", icon: "⚛️", desc: "Modern frontend framework" },
    { name: "Node.js", icon: "🟢", desc: "Server-side JavaScript" },
    { name: "TypeScript", icon: "🔷", desc: "Type-safe development" },
    { name: "Next.js", icon: "▲", desc: "Full-stack React framework" },
    { name: "MongoDB", icon: "🍃", desc: "NoSQL database" },
    { name: "PostgreSQL", icon: "🐘", desc: "Relational database" }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "₹15,000",
      features: ["5 Pages", "Responsive Design", "Contact Form", "Basic SEO", "1 Month Support"],
      color: "blue"
    },
    {
      name: "Business Website",
      price: "₹35,000",
      features: ["10+ Pages", "CMS Integration", "E-commerce Ready", "Advanced SEO", "Analytics", "3 Month Support"],
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "₹75,000+",
      features: ["Unlimited Pages", "Custom Features", "API Integration", "Database Design", "Cloud Deployment", "6 Month Support"],
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: "Software Development", href: "/services/software" },
            { label: "Web Development" }
          ]} 
        />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom web applications and websites built with modern technologies and best practices
          </p>
        </div>

        {/* Technologies */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Technologies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600 mb-4">Create stunning user interfaces and experiences</p>
              <ul className="space-y-2 text-sm">
                <li>• Responsive web design</li>
                <li>• Single Page Applications (SPA)</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• UI/UX implementation</li>
                <li>• Performance optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="w-6 h-6 mr-2 text-purple-600" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600 mb-4">Robust server-side solutions and APIs</p>
              <ul className="space-y-2 text-sm">
                <li>• RESTful API development</li>
                <li>• Database design & integration</li>
                <li>• Authentication & security</li>
                <li>• Payment gateway integration</li>
                <li>• Cloud deployment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Packages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Web Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg relative ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <p className={`text-3xl font-bold text-${pkg.color}-600`}>{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 bg-${pkg.color}-500 rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full mt-6 bg-${pkg.color}-600 hover:bg-${pkg.color}-700`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-white/90" />
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Web Presence?</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Let's create a modern, fast, and secure web application that grows your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}