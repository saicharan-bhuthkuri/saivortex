import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Lightbulb, Users } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality",
      description: "High standards in every service"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity", 
      description: "Honesty, ethics, transparency"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Embrace new ideas & tech"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "People-Centric",
      description: "Employees are assets"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ label: "About" }]} />
        
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About SaiVortex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2024 with a vision to transform technology through integrity and innovation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be a trusted leader recognized for innovative, ethical, and sustainable technology and creative solutions fostering excellence, growth, and strong client partnerships.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To redefine excellence by continuously innovating, fostering sustainability, and consistently exceeding client expectations while building lasting trust and value.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace showcasing professional technology environment" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-6 bg-gray-50">
                <CardContent className="p-0">
                  <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Founder Section */}
        <Card className="bg-gray-50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">Saicharan Bhuthkuri</h3>
              <p className="text-gray-600 mb-6">
                Visionary leader driving innovation and excellence in technology solutions. Founded SaiVortex in 2024 with a commitment to transforming the technology landscape through integrity and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="mailto:saivortex.dev@gmail.com" 
                  className="flex items-center text-brand-purple hover:underline"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  saivortex.dev@gmail.com
                </a>
                <a 
                  href="tel:+916301133456" 
                  className="flex items-center text-brand-purple hover:underline"
                >
                  <i className="fas fa-phone mr-2"></i>
                  +91 6301133456
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-brand-gradient rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">
                SB
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
