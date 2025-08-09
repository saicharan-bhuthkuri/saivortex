import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Laptop, Zap, Shield, Star } from "lucide-react";

export default function LaptopRepair() {
  const services = [
    { icon: "🔋", title: "Battery Replacement", desc: "Original battery installation with warranty" },
    { icon: "🖥️", title: "Screen Repair", desc: "LCD/LED screen replacement and calibration" },
    { icon: "⌨️", title: "Keyboard Fix", desc: "Individual key or complete keyboard replacement" },
    { icon: "❄️", title: "Overheating Fix", desc: "Cooling system cleaning and fan replacement" },
    { icon: "🔌", title: "Charging Port", desc: "Power jack repair and cable replacement" },
    { icon: "💾", title: "Storage Upgrade", desc: "SSD/HDD upgrade and data migration" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: "Hardware Solutions", href: "/services/hardware" },
            { label: "Laptop Repair" }
          ]} 
        />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Laptop className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Laptop Repair
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert laptop repair services for all brands with genuine parts and quick turnaround
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <div className="flex items-center text-sm text-blue-600">
                  <Shield className="w-4 h-4 mr-1" />
                  6 Month Warranty
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Why Choose Our Laptop Repair?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-semibold mb-2">Quick Service</h3>
                <p className="text-sm text-gray-600">Most repairs completed within 24-48 hours</p>
              </div>
              <div>
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-semibold mb-2">Quality Parts</h3>
                <p className="text-sm text-gray-600">Only genuine or high-quality replacement parts</p>
              </div>
              <div>
                <Star className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="font-semibold mb-2">Expert Technicians</h3>
                <p className="text-sm text-gray-600">Certified professionals with years of experience</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Get Your Laptop Fixed Today</h2>
              <p className="text-lg text-white/90 mb-6">
                Free diagnosis • Competitive pricing • Quick turnaround
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-blue-600">
                  Book Repair Service
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}