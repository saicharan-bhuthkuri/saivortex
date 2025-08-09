import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, Briefcase, Wrench, FileText, ArrowRight } from "lucide-react";

export default function ProjectWorks() {
  const services = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Projects",
      description: "Final year projects, research work, thesis development, and academic assignments with proper documentation and presentations.",
      href: "/services/project-works/academic"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Professional Projects",
      description: "Business applications, enterprise solutions, web development, and commercial software projects for organizations.",
      href: "/services/project-works/professional"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Custom Projects",
      description: "Tailored solutions based on specific requirements including automation, data analysis, and specialized applications.",
      href: "/services/project-works/custom"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation & Presentations",
      description: "Comprehensive project documentation, technical reports, user manuals, and professional presentations.",
      href: "/services/project-works/documentation"
    }
  ];

  const projectTypes = [
    { name: "Web Applications", icon: "fas fa-globe" },
    { name: "Mobile Apps", icon: "fas fa-mobile-alt" },
    { name: "Desktop Software", icon: "fas fa-desktop" },
    { name: "Database Systems", icon: "fas fa-database" },
    { name: "Machine Learning", icon: "fas fa-brain" },
    { name: "IoT Projects", icon: "fas fa-wifi" },
    { name: "E-commerce", icon: "fas fa-shopping-cart" },
    { name: "Management Systems", icon: "fas fa-chart-line" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Project Works" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-project-diagram text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Project Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive project development services for academic and professional needs with complete documentation and support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-brand-gradient p-3 rounded-lg w-fit mb-4 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Link href={service.href} className="text-brand-purple font-medium text-sm hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Projects We Handle</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${type.icon} text-3xl text-brand-purple mb-2`}></i>
                <p className="text-gray-700 font-medium text-sm">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Included in Every Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-code text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Source Code</h3>
                <p className="text-gray-600 text-sm">Complete, well-commented source code with proper structure</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-file-alt text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Comprehensive project documentation and user guides</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-presentation text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Presentation</h3>
                <p className="text-gray-600 text-sm">Professional presentation slides for project demonstration</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-bug text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">Thorough testing and debugging before delivery</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-support text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 text-sm">Post-delivery support and minor modifications</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                <i className="fas fa-video text-white text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Demo Video</h3>
                <p className="text-gray-600 text-sm">Video demonstration of project functionality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's an academic project or professional development, we're here to help you succeed with quality deliverables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Discuss Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
