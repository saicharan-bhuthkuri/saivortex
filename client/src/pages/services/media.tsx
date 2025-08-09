import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Video, Image, Palette, Play, ArrowRight } from "lucide-react";

export default function MediaServices() {
  const services = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Editing",
      description: "Professional video editing services including color correction, audio enhancement, transitions, effects, and multi-format exports for social media and presentations.",
      href: "/services/media/video-editing"
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Photo Editing",
      description: "Advanced photo editing and retouching services including background removal, color correction, resizing, and enhancement for professional and personal use.",
      href: "/services/media/photo-editing"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Logo Creation",
      description: "Custom logo design and brand identity creation including multiple variations, color schemes, and file formats suitable for digital and print use.",
      href: "/services/media/logo-creation"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "AV Creation",
      description: "Audio-visual content creation including promotional videos, product demos, educational content, and multimedia presentations with professional quality.",
      href: "/services/media/av-creation"
    }
  ];

  const tools = [
    { name: "Adobe Photoshop", icon: "fas fa-layer-group" },
    { name: "Adobe Premiere", icon: "fas fa-video" },
    { name: "After Effects", icon: "fas fa-magic" },
    { name: "Illustrator", icon: "fas fa-vector-square" },
    { name: "Final Cut Pro", icon: "fas fa-cut" },
    { name: "DaVinci Resolve", icon: "fas fa-palette" },
    { name: "Canva Pro", icon: "fas fa-paint-brush" },
    { name: "Figma", icon: "fas fa-drafting-compass" }
  ];

  const mediaTypes = [
    {
      category: "Video Content",
      items: ["Promotional Videos", "Product Demos", "Social Media Content", "Educational Videos"]
    },
    {
      category: "Photo Services",
      items: ["Portrait Retouching", "Product Photography", "Event Photography", "Image Restoration"]
    },
    {
      category: "Design Services",
      items: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    {
      category: "Audio-Visual",
      items: ["Presentations", "Animations", "Motion Graphics", "Video Intros"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Media Services" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Media Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creative media solutions including video editing, photo enhancement, logo design, and audio-visual content creation.
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

        {/* Tools & Software */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Tools We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${tool.icon} text-3xl text-brand-purple mb-2`}></i>
                <p className="text-gray-700 font-medium text-sm">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Create</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-brand-purple rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Creative Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Understanding your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Concept</h3>
              <p className="text-gray-600 text-sm">Developing creative concepts and storyboards</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Creation</h3>
              <p className="text-gray-600 text-sm">Professional editing and design work</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Final review and delivery in desired formats</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bring Your Ideas to Life</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to create stunning visual content? Let's discuss your media project and bring your creative vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Start Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
