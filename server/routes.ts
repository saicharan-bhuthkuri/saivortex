import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertStudentRequestSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'saivortex.dev@gmail.com',
      pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER || 'saivortex.dev@gmail.com',
        to: 'saivortex.dev@gmail.com',
        subject: `New Contact Form Submission - ${contactData.service || 'General'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${contactData.service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        // Don't fail the request if email fails
      }

      res.json({ success: true, id: contact.id });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  // Student request submission
  app.post("/api/student-request", async (req, res) => {
    try {
      const requestData = insertStudentRequestSchema.parse(req.body);
      const studentRequest = await storage.createStudentRequest(requestData);

      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER || 'saivortex.dev@gmail.com',
        to: 'saivortex.dev@gmail.com',
        subject: `New Student Request - ${requestData.type}`,
        html: `
          <h2>New Student Request</h2>
          <p><strong>Name:</strong> ${requestData.name}</p>
          <p><strong>Email:</strong> ${requestData.email}</p>
          <p><strong>Subject:</strong> ${requestData.subject}</p>
          <p><strong>Type:</strong> ${requestData.type}</p>
          <p><strong>Description:</strong></p>
          <p>${requestData.description}</p>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        // Don't fail the request if email fails
      }

      res.json({ success: true, id: studentRequest.id });
    } catch (error) {
      res.status(400).json({ error: "Invalid student request data" });
    }
  });

  // Get contacts (admin functionality)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get student requests (admin functionality)
  app.get("/api/student-requests", async (req, res) => {
    try {
      const requests = await storage.getStudentRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch student requests" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
