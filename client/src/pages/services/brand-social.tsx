import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Settings, FileText, ArrowRight } from "lucide-react";

export default function BrandSocialServices() {
  const services = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Social Media Setup",
      description: "Complete social media account setup and optimization including profile creation, branding, bio optimization, and initial content strategy across all major platforms.",
      href: "/services/brand-social/setup"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Management",
      description: "Ongoing content creation, scheduling, posting, and community management services to maintain active and engaging social media presence.",
      href: "/services/brand-social/content-management"
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "fab fa-facebook", color: "text-blue-600" },
    { name: "Instagram", icon: "fab fa-instagram", color: "text-pink-600" },
    { name: "Twitter", icon: "fab fa-twitter", color: "text-blue-400" },
    { name: "LinkedIn", icon: "fab fa-linkedin", color: "text-blue-700" },
    { name: "YouTube", icon: "fab fa-youtube", color: "text-red-600" },
    { name: "TikTok", icon: "fab fa-tiktok", color: "text-black" },
    { name: "Pinterest", icon: "fab fa-pinterest", color: "text-red-500" },
    { name: "WhatsApp Business", icon: "fab fa-whatsapp", color: "text-green-600" }
  ];

  const setupServices = [
    {
      icon: "fas fa-user-circle",
      title: "Profile Optimization",
      description: "Professional profile setup with optimized bios and contact information"
    },
    {
      icon: "fas fa-palette",
      title: "Brand Consistency",
      description: "Consistent branding across all social media platforms"
    },
    {
      icon: "fas fa-chart-line",
      title: "Analytics Setup",
      description: "Implementation of tracking and analytics tools"
    },
    {
      icon: "fas fa-calendar",
      title: "Content Planning",
      description: "Strategic content calendar and posting schedule"
    }
  ];

  const contentServices = [
    {
      icon: "fas fa-camera",
      title: "Visual Content",
      description: "Custom graphics, images, and video content creation"
    },
    {
      icon: "fas fa-pen",
      title: "Copywriting",
      description: "Engaging captions, posts, and social media copy"
    },
    {
      icon: "fas fa-clock",
      title: "Scheduled Posting",
      description: "Automated posting at optimal times for engagement"
    },
    {
      icon: "fas fa-comments",
      title: "Community Management",
      description: "Responding to comments, messages, and engagement"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Brand & Social Media" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-hashtag text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Brand & Social Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your brand presence with professional social media setup and ongoing content management services.
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

        {/* Supported Platforms */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${platform.icon} text-3xl ${platform.color} mb-2`}></i>
                <p className="text-gray-700 font-medium text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Social Media Setup Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupServices.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                    <i className={`${service.icon} text-white`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Management Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Management Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentServices.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                    <i className={`${service.icon} text-white`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Package Options */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Package</h3>
                <p className="text-gray-600 mb-4">Perfect for new businesses</p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>2-3 Platform Setup</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Profile Optimization</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Basic Branding</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Content Strategy</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center border-brand-purple border-2">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Package</h3>
                <p className="text-gray-600 mb-4">Most popular choice</p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>5+ Platform Setup</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Complete Branding</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Monthly Content</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Analytics Setup</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
                <p className="text-gray-600 mb-4">For established businesses</p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>All Platform Setup</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Daily Content</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Community Management</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>Monthly Reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Brand?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's build a strong social media presence for your brand. Contact us to discuss your social media goals and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
            <a href="https://wa.me/916301133456" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
