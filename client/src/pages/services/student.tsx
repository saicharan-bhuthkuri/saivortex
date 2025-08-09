import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, Book, ClipboardCheck, ArrowRight } from "lucide-react";

export default function StudentServices() {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Assignment Help",
      description: "Expert assistance with academic assignments, essays, research papers, lab reports, and project documentation across various subjects and academic levels.",
      href: "/services/student/assignments"
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Notes & Study Materials",
      description: "Comprehensive study notes, summaries, reference materials, and learning resources tailored to specific courses and examination requirements.",
      href: "/services/student/notes"
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Exam Preparation Guides",
      description: "Structured exam preparation materials, practice tests, revision guides, and study strategies for various competitive and academic examinations.",
      href: "/services/student/exam-guides"
    }
  ];

  const subjects = [
    { name: "Computer Science", icon: "fas fa-laptop-code" },
    { name: "Mathematics", icon: "fas fa-calculator" },
    { name: "Engineering", icon: "fas fa-cogs" },
    { name: "Business Studies", icon: "fas fa-briefcase" },
    { name: "Science", icon: "fas fa-flask" },
    { name: "English Literature", icon: "fas fa-book-open" },
    { name: "Economics", icon: "fas fa-chart-pie" },
    { name: "Statistics", icon: "fas fa-chart-bar" }
  ];

  const assignmentTypes = [
    {
      category: "Academic Writing",
      items: ["Essays & Papers", "Research Projects", "Case Studies", "Literature Reviews"]
    },
    {
      category: "Technical Projects",
      items: ["Programming Assignments", "Lab Reports", "Technical Documentation", "System Design"]
    },
    {
      category: "Analysis & Reports",
      items: ["Data Analysis", "Business Reports", "Market Research", "Statistical Analysis"]
    },
    {
      category: "Presentations",
      items: ["PowerPoint Slides", "Academic Presentations", "Project Demos", "Thesis Defense"]
    }
  ];

  const studyMaterials = [
    {
      icon: "fas fa-file-pdf",
      title: "PDF Notes",
      description: "Downloadable study notes in PDF format"
    },
    {
      icon: "fas fa-video",
      title: "Video Tutorials",
      description: "Explanatory videos for complex topics"
    },
    {
      icon: "fas fa-question-circle",
      title: "Practice Questions",
      description: "Sample questions with detailed solutions"
    },
    {
      icon: "fas fa-bookmark",
      title: "Quick References",
      description: "Handy reference guides and cheat sheets"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/" },
            { label: "Student Services" }
          ]} 
        />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-graduation-cap text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Student Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic support services to help students excel in their studies with expert guidance and quality resources.
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

        {/* Subjects We Cover */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Subjects We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <i className={`${subject.icon} text-3xl text-brand-purple mb-2`}></i>
                <p className="text-gray-700 font-medium text-sm">{subject.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Assignment Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Assignments We Handle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assignmentTypes.map((type, index) => (
              <Card key={index} className="p-6">
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

        {/* Study Materials */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Study Materials Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyMaterials.map((material, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                  <i className={`${material.icon} text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{material.title}</h3>
                <p className="text-gray-600 text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Student Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Student Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-user-graduate text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Tutors</h3>
              <p className="text-gray-600 text-sm">Qualified educators and subject experts</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-clock text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">Always meet assignment deadlines</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-check-circle text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Thorough review and quality checks</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-gradient p-3 rounded-lg w-fit mx-auto mb-3">
                <i className="fas fa-dollar-sign text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Rates</h3>
              <p className="text-gray-600 text-sm">Student-friendly pricing</p>
            </div>
          </div>
        </div>

        {/* Academic Levels */}
        <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Academic Levels We Support</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["High School", "Undergraduate", "Graduate", "Post-Graduate", "PhD", "Diploma", "Certificate"].map((level, index) => (
              <div key={index} className="bg-brand-gradient text-white px-4 py-2 rounded-full font-medium">
                {level}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Excel in Your Studies?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get expert academic support and quality study materials to boost your performance. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student-resources">
              <Button className="bg-brand-gradient text-white hover:opacity-90">
                Request Help
              </Button>
            </Link>
            <a href="mailto:saivortex.dev@gmail.com">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Email Your Assignment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
