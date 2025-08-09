import { useState } from "react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertStudentRequestSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { FileText, Book, ClipboardCheck, ArrowRight } from "lucide-react";

const studentRequestFormSchema = insertStudentRequestSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  type: z.string().min(1, "Please select help type"),
  description: z.string().min(10, "Description must be at least 10 characters")
});

type StudentRequestFormData = z.infer<typeof studentRequestFormSchema>;

export default function StudentResources() {
  const { toast } = useToast();
  
  const form = useForm<StudentRequestFormData>({
    resolver: zodResolver(studentRequestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      type: "",
      description: ""
    }
  });

  const studentRequestMutation = useMutation({
    mutationFn: (data: StudentRequestFormData) => apiRequest("POST", "/api/student-request", data),
    onSuccess: () => {
      toast({
        title: "Request submitted successfully!",
        description: "We'll review your request and get back to you soon."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to submit request",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: StudentRequestFormData) => {
    studentRequestMutation.mutate(data);
  };

  const resources = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Assignment Help",
      description: "Expert assistance with academic assignments across various subjects",
      action: "Request Help"
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Notes & Study Materials",
      description: "Comprehensive study notes and materials for better learning",
      action: "Download Notes"
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Exam Preparation",
      description: "Structured preparation guides and practice materials",
      action: "Start Preparing"
    }
  ];

  const helpTypes = [
    { value: "assignment", label: "Assignment Help" },
    { value: "notes", label: "Study Notes" },
    { value: "exam", label: "Exam Preparation" },
    { value: "project", label: "Project Guidance" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ label: "Student Resources" }]} />
        
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Student Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic support and resources to help students excel
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-brand-gradient p-3 rounded-lg w-fit mb-4 text-white">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-brand-purple font-medium text-sm hover:underline inline-flex items-center">
                  {resource.action} <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Request Help Form */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Academic Help?</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject/Course</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Computer Science, Mathematics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Help Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select help type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {helpTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe what you need help with..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-brand-gradient text-white hover:opacity-90"
                disabled={studentRequestMutation.isPending}
              >
                {studentRequestMutation.isPending ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
