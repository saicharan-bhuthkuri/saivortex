import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { ThemeProvider, HighContrastToggle } from "@/hooks/use-theme";
import NotFound from "@/pages/not-found";

// Page imports
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Portfolio from "@/pages/portfolio";
import StudentResources from "@/pages/student-resources";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";

// Service page imports
import HardwareSolutions from "@/pages/services/hardware";
import SoftwareSolutions from "@/pages/services/software";
import ProjectWorks from "@/pages/services/projects";
import DocumentServices from "@/pages/services/documents";
import MediaServices from "@/pages/services/media";
import BrandSocialServices from "@/pages/services/brand-social";
import EventServices from "@/pages/services/events";
import StudentServices from "@/pages/services/student";

// Sub-service page imports
import ComputerRepair from "@/pages/services/hardware/computer-repair";
import LaptopRepair from "@/pages/services/hardware/laptop-repair";
import WebDevelopment from "@/pages/services/software/web-development";
import MobileDevelopment from "@/pages/services/software/mobile-development";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/student-resources" component={StudentResources} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      {/* Service pages */}
      <Route path="/services/hardware" component={HardwareSolutions} />
      <Route path="/services/software" component={SoftwareSolutions} />
      <Route path="/services/projects" component={ProjectWorks} />
      <Route path="/services/documents" component={DocumentServices} />
      <Route path="/services/media" component={MediaServices} />
      <Route path="/services/brand-social" component={BrandSocialServices} />
      <Route path="/services/events" component={EventServices} />
      <Route path="/services/student" component={StudentServices} />
      
      {/* Sub-service pages */}
      <Route path="/services/hardware/computer-repair" component={ComputerRepair} />
      <Route path="/services/hardware/laptop-repair" component={LaptopRepair} />
      <Route path="/services/software/web-development" component={WebDevelopment} />
      <Route path="/services/software/mobile-development" component={MobileDevelopment} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Header onMobileMenuToggle={() => setMobileMenuOpen(true)} />
            <MobileNav 
              isOpen={mobileMenuOpen} 
              onClose={() => setMobileMenuOpen(false)} 
            />
            <main className="pb-16 lg:pb-0">
              <Router />
            </main>
            <Footer />
            <WhatsAppWidget />
            <HighContrastToggle />
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
