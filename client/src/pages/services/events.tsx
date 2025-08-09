import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Building, Mail, ArrowRight } from "lucide-react";

export default function EventServices() {
  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Small Events",
      description: "Intimate gatherings, birthday parties, small corporate meetings, workshops, and personal celebrations with complete planning and coordination.",
      href: "/services/events/small"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Large Events",
      description: "Corporate conferences, weddings, seminars, product launches, and large-scale events with comprehensive event management and logistics.",
      href: "/services/events/large"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Digital Invitations",
      description: "Custom digital invitation design and distribution via email, WhatsApp, and social media with RSVP tracking and guest management.",
      href: "/services/events/invitations"
    }
  ];

  const eventTypes = [
    { name: "Corporate Events", icon: "fas fa-building", description: "Meetings, conferences, seminars" },
    { name: "Weddings", icon: "fas fa-heart", description: "Wedding planning and coordination" },
    { name: "Birthday Parties", icon: "fas fa-birthday-cake", description: "Personal celebration events" },
    { name: "Product Launches", icon: "fas fa-rocket", description: "Business launch events" },
    { name: "Workshops", icon: "fas fa-chalkboard-teacher", description: "Educational and training events" },
    { name: "Social Gatherings", icon: "fas fa-users", description: "Community and social events" },
    { name: "Festivals", icon: "fas fa-music", description: "Cultural and entertainment events" },
    { name: "Charity Events", icon: "fas fa-hand-holding-heart", description: "Fundraising and charity functions" }
  ];

  const planningServices = [
    {
      icon: "fas fa-calendar-check",
      title: "Event Planning",
      description: "Complete event planning from concept to execution"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Venue Selection",
      description: "Finding and booking the perfect venue"
    },
    {
      icon: "fas fa-utensils",
      title: "Catering Coordination",
      description: "Food and beverage arrangements"
    },
    {
      icon: "fas fa-microphone",
      title: "Audio Visual",
      description: "Sound systems, lighting, and presentations"
    },
    {
      icon: "fas fa-camera",
      title: "Photography",
      description: "Professional event photography services"
    },
    {
      icon: "fas fa-clipboard-list",
      title: "Guest Management",
      description: "Registration, check-in, and coordination"
    }
  ];

  const invitationFeatures = [
    {
      icon: "fas fa-palette",
      title: "Custom Design",
      description: "Personalized invitation designs matching your theme"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Multi-Platform",
      description: "Send via email, WhatsApp, and social media"
    },
    {
      icon: "fas fa-chart-bar",
      title: "RSVP Tracking",
      description: "Real-time response tracking and guest lists"
    },
    {
      icon: "fas fa-clock",
      title: "Reminders",
      description: "Automated reminders leading up to the event"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Event Organizing" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-calendar-alt text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Event Organizing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional event planning and management services for memorable occasions, from intimate gatherings to large-scale events.
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

        {/* Event Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Events We Organize</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${type.icon} text-3xl text-brand-purple mb-3`}></i>
                <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                <p className="text-gray-600 text-xs">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Planning Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comprehensive Event Planning</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningServices.map((service, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="bg-brand-gradient p-2 rounded-lg mr-4 mt-1">
                      <i className={`${service.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Invitations */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Digital Invitation Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {invitationFeatures.map((feature, index) => (
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

        {/* Process Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Event Planning Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Create detailed event plan and timeline</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Coordination</h3>
              <p className="text-gray-600 text-sm">Arrange vendors, venue, and logistics</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Management</h3>
              <p className="text-gray-600 text-sm">Execute and manage the event day</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                5
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">Post-event wrap-up and feedback</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Perfect Event</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether it's a small gathering or a large celebration, let us help you create an unforgettable experience for you and your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Plan Event
              </Button>
            </Link>
            <a href="tel:+916301133456">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Call for Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
