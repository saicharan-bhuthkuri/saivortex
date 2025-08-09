import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Award, Handshake, Lightbulb, Users, Star } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: "fas fa-wrench",
      title: "Hardware Solutions",
      description: "PC/Laptop repair, configuration, and upgrades",
      href: "/services/hardware"
    },
    {
      icon: "fas fa-code",
      title: "Software Solutions", 
      description: "Custom applications, installation & support",
      href: "/services/software"
    },
    {
      icon: "fas fa-project-diagram",
      title: "Project Works",
      description: "Academic & professional project development",
      href: "/services/projects"
    },
    {
      icon: "fas fa-file-alt",
      title: "Document Services",
      description: "Editing, formatting, PDF conversion",
      href: "/services/documents"
    },
    {
      icon: "fas fa-play-circle",
      title: "Media Services",
      description: "Video editing, photo editing, logo creation",
      href: "/services/media"
    },
    {
      icon: "fas fa-hashtag",
      title: "Brand & Social Media",
      description: "Social media setup & content management",
      href: "/services/brand-social"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Event Organizing",
      description: "Small & large events, digital invitations",
      href: "/services/events"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Student Services",
      description: "Assignment help, notes & exam preparation",
      href: "/services/student"
    }
  ];

  const portfolioItems = [
    {
      title: "Enterprise Software Solution",
      description: "Custom application development for corporate client",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Hardware Diagnostic Center", 
      description: "Complete PC/Laptop repair and upgrade services",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Student Management System",
      description: "Academic project with documentation and presentation",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Reddy",
      role: "IT Manager",
      content: "Excellent service and support. SaiVortex delivered our project on time with exceptional quality. Highly recommended for any technology needs.",
      initial: "A"
    },
    {
      name: "Priya Sharma", 
      role: "Student",
      content: "Professional and reliable. They fixed my laptop issues quickly and provided great customer service. Will definitely use their services again.",
      initial: "P"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner", 
      content: "Outstanding work on our company website. The team understood our requirements perfectly and delivered beyond expectations.",
      initial: "R"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-pattern py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforming{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Technology
                </span>{" "}
                with Integrity and Innovation
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Your trusted partner for comprehensive technology solutions. From hardware repair to custom software development, we deliver excellence with integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Link href="/services/hardware">
                  <Button size="lg" className="bg-brand-gradient text-white hover:opacity-90">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8 text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center">
                  <i className="fas fa-phone text-brand-purple mr-2"></i>
                  <span>+91 6301133456</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-brand-purple mr-2"></i>
                  <span>saivortex.dev@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace with computers and technology" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-brand-gradient p-3 rounded-lg mr-4">
                    <Check className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100+ Projects</div>
                    <div className="text-gray-600 text-sm">Successfully Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group border border-gray-200 hover:border-brand-purple hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="bg-brand-gradient p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href={service.href} className="text-brand-purple font-medium text-sm hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose SaiVortex?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to delivering transformative solutions that exceed expectations while maintaining the highest standards of integrity and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                    <Award className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">High-quality service delivery with a focus on excellence in every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                    <Handshake className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ethical Business Practices</h3>
                    <p className="text-gray-600">Transparency, honesty, and integrity in all our business relationships.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                    <Lightbulb className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600">Cutting-edge technology and creative approaches to solve complex challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                    <Users className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative Engagement</h3>
                    <p className="text-gray-600">Strong partnerships built on mutual respect and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business meeting with team collaboration" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-purple">2024</div>
                  <div className="text-gray-600 text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise across diverse technology projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center text-brand-purple font-medium text-sm">
                    <span>View Project</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by individuals and businesses for reliable technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-brand-purple">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="inline-block h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
