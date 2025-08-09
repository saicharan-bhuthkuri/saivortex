import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Edit, FileType, Printer, ArrowRight } from "lucide-react";

export default function DocumentServices() {
  const services = [
    {
      icon: <Edit className="h-6 w-6" />,
      title: "Editing & Formatting",
      description: "Professional document editing, formatting, grammar correction, and content improvement for academic papers, reports, and business documents.",
      href: "/services/documents/editing"
    },
    {
      icon: <FileType className="h-6 w-6" />,
      title: "PDF Conversion",
      description: "Document conversion services including Word to PDF, Excel to PDF, PowerPoint to PDF, and other format conversions with preserved formatting.",
      href: "/services/documents/conversion"
    },
    {
      icon: <Printer className="h-6 w-6" />,
      title: "Printing & Scanning",
      description: "High-quality printing services for documents, presentations, posters, and professional scanning with OCR text recognition capabilities.",
      href: "/services/documents/printing"
    }
  ];

  const documentTypes = [
    { name: "Academic Papers", icon: "fas fa-graduation-cap" },
    { name: "Business Reports", icon: "fas fa-chart-line" },
    { name: "Resumes & CVs", icon: "fas fa-user-tie" },
    { name: "Presentations", icon: "fas fa-presentation" },
    { name: "Legal Documents", icon: "fas fa-gavel" },
    { name: "Technical Manuals", icon: "fas fa-book" },
    { name: "Proposals", icon: "fas fa-handshake" },
    { name: "Certificates", icon: "fas fa-certificate" }
  ];

  const features = [
    {
      icon: "fas fa-spell-check",
      title: "Grammar & Spell Check",
      description: "Comprehensive proofreading and correction"
    },
    {
      icon: "fas fa-palette",
      title: "Professional Formatting",
      description: "Consistent styling and layout design"
    },
    {
      icon: "fas fa-file-pdf",
      title: "Multiple Formats",
      description: "Support for various document formats"
    },
    {
      icon: "fas fa-clock",
      title: "Quick Turnaround",
      description: "Fast and efficient service delivery"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Document Services" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-file-alt text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Document Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional document editing, formatting, conversion, and printing services to enhance your written communications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* Document Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Documents We Handle</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {documentTypes.map((type, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${type.icon} text-3xl text-brand-purple mb-2`}></i>
                <p className="text-gray-700 font-medium text-sm">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Document Services Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                  <i className={`${feature.icon} text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Document Help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's editing, formatting, or converting documents, our team is ready to help you create professional-quality materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Request Service
              </Button>
            </Link>
            <a href="mailto:saivortex.dev@gmail.com">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Email Documents
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
