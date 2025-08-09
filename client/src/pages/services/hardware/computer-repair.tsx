import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Monitor, Wrench, Clock, CheckCircle } from "lucide-react";

export default function ComputerRepair() {
  const features = [
    "Hardware Diagnostics",
    "Component Replacement",
    "Performance Optimization",
    "Data Recovery Services",
    "Virus & Malware Removal",
    "System Upgrades"
  ];

  const processes = [
    { step: 1, title: "Diagnosis", desc: "Complete system analysis" },
    { step: 2, title: "Quote", desc: "Transparent pricing" },
    { step: 3, title: "Repair", desc: "Expert fixing" },
    { step: 4, title: "Testing", desc: "Quality assurance" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: "Hardware Solutions", href: "/services/hardware" },
            { label: "Computer Repair" }
          ]} 
        />
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Computer Repair Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional computer repair and maintenance services to keep your systems running smoothly
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Professional {feature.toLowerCase()} with guaranteed quality and quick turnaround time.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Our Repair Process</CardTitle>
            <p className="text-gray-600">Simple, transparent, and efficient</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {processes.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Service Pricing</CardTitle>
            <p className="text-gray-600">Transparent and competitive rates</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-lg mb-2">Basic Diagnosis</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">₹500</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete system check</li>
                  <li>• Issue identification</li>
                  <li>• Repair estimate</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
                <Badge className="mb-2">Most Popular</Badge>
                <h3 className="font-semibold text-lg mb-2">Standard Repair</h3>
                <p className="text-3xl font-bold text-purple-600 mb-4">₹1,500+</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hardware replacement</li>
                  <li>• Software optimization</li>
                  <li>• 30-day warranty</li>
                </ul>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="font-semibold text-lg mb-2">Premium Service</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">₹3,000+</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete system upgrade</li>
                  <li>• Data backup & recovery</li>
                  <li>• 90-day warranty</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <Wrench className="w-16 h-16 mx-auto mb-4 text-white/90" />
              <h2 className="text-2xl font-bold mb-4">Need Computer Repair?</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Get your computer fixed by certified technicians with quick turnaround and warranty
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    Get Quote Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Emergency Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}