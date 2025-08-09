import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, Download, Settings, ArrowRight } from "lucide-react";

export default function SoftwareSolutions() {
  const services = [
    {
      icon: <Download className="h-6 w-6" />,
      title: "Installation & Setup",
      description: "Professional software installation, configuration, and setup services including operating systems, applications, and development environments.",
      href: "/services/software/installation"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Applications",
      description: "Bespoke software development including web applications, desktop software, mobile apps, and automated solutions tailored to your needs.",
      href: "/services/software/custom-apps"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Maintenance & Support",
      description: "Ongoing software maintenance, updates, bug fixes, technical support, and system optimization to ensure smooth operations.",
      href: "/services/software/maintenance"
    }
  ];

  const technologies = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Java", icon: "fab fa-java" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Angular", icon: "fab fa-angular" },
    { name: "Vue.js", icon: "fab fa-vuejs" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Software Solutions" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-code text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Software Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom software development and installation services to streamline your operations and boost productivity.
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
                
                {/* Sub-services for Web/Mobile Development */}
                {service.title === "Web Development" && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      <Link href="/services/software/web-development">
                        <div className="text-xs bg-blue-50/80 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100/80 transition-colors cursor-pointer border border-blue-200/50">
                          Custom Web Development →
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
                {service.title === "Mobile Apps" && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      <Link href="/services/software/mobile-development">
                        <div className="text-xs bg-purple-50/80 text-purple-700 px-3 py-2 rounded-lg hover:bg-purple-100/80 transition-colors cursor-pointer border border-purple-200/50">
                          iOS & Android Development →
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

        {/* Technologies Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${tech.icon} text-3xl text-brand-purple mb-2`}></i>
                <p className="text-gray-700 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">Understanding your requirements and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Creating architecture and user interface designs</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Building and coding your custom solution</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Software Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your software needs and create a custom solution that fits your requirements perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
            <a href="mailto:saivortex.dev@gmail.com">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
