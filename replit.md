# SaiVortex Corporate Website

## Overview

SaiVortex is a modern corporate website for a technology solutions company founded in 2024 by Saicharan Bhuthkuri. The website showcases comprehensive technology services including hardware solutions, software development, project works, document services, media creation, brand & social media management, event organizing, and student services. Built with React, TypeScript, and Node.js, the platform features a responsive design with shadcn/ui components, form handling for contact and student requests, and email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture  
- **Runtime**: Node.js with Express.js for RESTful API endpoints
- **Language**: TypeScript with ES modules for type safety and modern syntax
- **Data Storage**: PostgreSQL database with Drizzle ORM for type-safe database operations
- **Email Service**: Nodemailer with Gmail SMTP for contact form notifications
- **Session Management**: In-memory storage with fallback to PostgreSQL sessions

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Code-first approach with migrations in `/migrations` directory  
- **Tables**: Users, contacts, and student requests with UUID primary keys
- **Validation**: Zod schemas for runtime type checking and API validation

### API Structure
- **Contact Endpoint**: `/api/contact` for general inquiries with email notifications
- **Student Services**: `/api/student-request` for academic support requests
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging

### Development & Build
- **Development**: Vite dev server with HMR and Express API integration
- **Production Build**: Static frontend build with bundled Express server
- **Type Checking**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESLint and Prettier integration through Vite plugins

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting (`@neondatabase/serverless`)
- **Drizzle Kit**: Database migrations and schema management

### Email Services  
- **Gmail SMTP**: Email delivery service through Nodemailer
- **Environment Variables**: `EMAIL_USER` and `GMAIL_APP_PASSWORD` for authentication

### UI & Design Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography  
- **Tailwind CSS**: Utility-first CSS framework with custom brand colors
- **Google Fonts**: Poppins font family for typography

### Form & Validation
- **React Hook Form**: Form state management with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Bridge between React Hook Form and Zod

### Development Tools
- **Replit Integration**: Development environment with cartographer and error modal plugins
- **Font Awesome**: Icon library for additional iconography
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Third-party Integrations
- **WhatsApp Widget**: Direct messaging integration for customer support
- **Social Media Links**: Footer integration for company social presence
- **Analytics Ready**: Structure prepared for Google Analytics integration