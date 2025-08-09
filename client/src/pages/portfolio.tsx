import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Enterprise Software Solution",
      description: "Custom application development for corporate client with advanced features and scalability",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Software Development",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Hardware Diagnostic Center", 
      description: "Complete PC/Laptop repair and upgrade services with advanced diagnostic tools",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Hardware Solutions",
      technologies: ["Diagnostics", "Repair", "Upgrades"]
    },
    {
      title: "Student Management System",
      description: "Academic project with comprehensive documentation and interactive presentations",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Academic Projects",
      technologies: ["Database", "Web Interface", "Reports"]
    },
    {
      title: "Corporate Brand Identity",
      description: "Complete brand identity design including logo, business cards, and marketing materials",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Brand Design",
      technologies: ["Photoshop", "Illustrator", "Brand Strategy"]
    },
    {
      title: "Event Management Platform",
      description: "Digital platform for organizing events with invitation management and RSVP tracking",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Event Solutions",
      technologies: ["Event Management", "Digital Invitations", "Analytics"]
    },
    {
      title: "Educational Content Portal",
      description: "Comprehensive study materials and assignment help platform for students",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Student Services",
      technologies: ["Content Management", "Study Materials", "Assessment"]
    }
  ];

  const testimonials = [
    {
      name: "Arjun Reddy",
      role: "IT Manager",
      company: "Tech Corp",
      content: "Excellent service and support. SaiVortex delivered our project on time with exceptional quality. Highly recommended for any technology needs.",
      rating: 5,
      initial: "A"
    },
    {
      name: "Priya Sharma", 
      role: "Student",
      company: "University",
      content: "Professional and reliable. They fixed my laptop issues quickly and provided great customer service. Will definitely use their services again.",
      rating: 5,
      initial: "P"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      company: "Local Business",
      content: "Outstanding work on our company website. The team understood our requirements perfectly and delivered beyond expectations.",
      rating: 5,
      initial: "R"
    },
    {
      name: "Dr. Sunitha Rao",
      role: "Professor",
      company: "Engineering College",
      content: "Helped multiple students with their academic projects. Very knowledgeable and supportive throughout the development process.",
      rating: 5,
      initial: "S"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ label: "Portfolio" }]} />
        
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise across diverse technology projects and successful client collaborations
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-brand-purple font-medium text-sm">
                  <span>View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with SaiVortex
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-brand-purple flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-gradient text-white hover:opacity-90">
              Start a Project
            </Button>
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
