import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Smartphone, Apple, Zap } from "lucide-react";

export default function MobileDevelopment() {
  const platforms = [
    { name: "React Native", icon: "📱", desc: "Cross-platform development", color: "blue" },
    { name: "Flutter", icon: "🚀", desc: "Google's UI toolkit", color: "purple" },
    { name: "Native iOS", icon: "📱", desc: "Swift & Objective-C", color: "gray" },
    { name: "Native Android", icon: "🤖", desc: "Kotlin & Java", color: "green" }
  ];

  const features = [
    "Native Performance",
    "Push Notifications", 
    "Offline Functionality",
    "Payment Integration",
    "Social Media Login",
    "Real-time Updates",
    "GPS & Location",
    "Camera Integration"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: "Software Development", href: "/services/software" },
            { label: "Mobile Development" }
          ]} 
        />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful mobile applications for iOS and Android with native performance and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <CardTitle className="text-lg">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{platform.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Mobile App Features</CardTitle>
            <p className="text-gray-600">Everything your app needs to succeed</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Apple className="w-6 h-6 mr-2" />
                iOS Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Native iOS apps with premium user experience</p>
              <ul className="space-y-2 text-sm">
                <li>• Swift programming</li>
                <li>• App Store optimization</li>
                <li>• iOS design guidelines</li>
                <li>• TestFlight beta testing</li>
                <li>• Core Data integration</li>
              </ul>
              <div className="mt-6">
                <Badge className="bg-gray-900 text-white">Starting from ₹45,000</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Smartphone className="w-6 h-6 mr-2" />
                Android Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Native Android apps with Material Design</p>
              <ul className="space-y-2 text-sm">
                <li>• Kotlin programming</li>
                <li>• Google Play optimization</li>
                <li>• Material Design principles</li>
                <li>• Firebase integration</li>
                <li>• Room database</li>
              </ul>
              <div className="mt-6">
                <Badge className="bg-green-600">Starting from ₹40,000</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Mobile App?</h2>
              <p className="text-lg text-white/90 mb-6">
                Transform your idea into a powerful mobile application that users love
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    Start Development
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}