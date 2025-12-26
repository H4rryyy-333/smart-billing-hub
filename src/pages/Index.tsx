import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import {
  Zap,
  Globe,
  Link2,
  Shield,
  Clock,
  TrendingUp,
  Bell,
  Smartphone,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI-powered Billing Automation",
    description: "Smart templates, auto-categorization, and predictive analytics reduce manual work by 80%.",
  },
  {
    icon: Globe,
    title: "GST & Multi-currency Support",
    description: "Built-in compliance for GST, VAT, and international currencies. Always tax-ready.",
  },
  {
    icon: Link2,
    title: "CRM, ERP & LMS Integration",
    description: "Seamlessly connect with your existing tools. Tally, QuickBooks, and 50+ integrations.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable Platform",
    description: "Enterprise-grade security with 2FA, role-based access, and automated backups.",
  },
];

const valueProps = [
  {
    icon: Clock,
    title: "Reduce Manual Work",
    description: "AI automates invoice creation, categorization, and follow-ups.",
  },
  {
    icon: TrendingUp,
    title: "Predict & Plan",
    description: "Forecast payments and understand customer behavior patterns.",
  },
  {
    icon: Bell,
    title: "Never Miss Payments",
    description: "Automated reminders via email, SMS, and WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Work Anywhere",
    description: "Full functionality on Web, Android, and iOS platforms.",
  },
];

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-6 animate-fade-up">
              Introducing Zenelait Infotech
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Smart Billing Software for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Easy, fast, and AI-powered billing with GST compliance, automation, and real-time insights. Built for SMEs and Enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Demo
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="hero-outline" size="xl">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 md:mt-24 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card rounded-2xl p-2 md:p-4 shadow-2xl">
              <div className="bg-sidebar rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-sidebar-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-sidebar-accent rounded-lg p-4">
                    <p className="text-sidebar-foreground/60 text-xs mb-1">Total Revenue</p>
                    <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">₹12.4L</p>
                    <p className="text-accent text-xs mt-1">+12.5% ↑</p>
                  </div>
                  <div className="bg-sidebar-accent rounded-lg p-4">
                    <p className="text-sidebar-foreground/60 text-xs mb-1">Pending</p>
                    <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">₹2.8L</p>
                    <p className="text-destructive text-xs mt-1">8 invoices</p>
                  </div>
                  <div className="bg-sidebar-accent rounded-lg p-4">
                    <p className="text-sidebar-foreground/60 text-xs mb-1">This Month</p>
                    <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">47</p>
                    <p className="text-accent text-xs mt-1">Invoices sent</p>
                  </div>
                  <div className="bg-sidebar-accent rounded-lg p-4">
                    <p className="text-sidebar-foreground/60 text-xs mb-1">AI Alerts</p>
                    <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">3</p>
                    <p className="text-primary text-xs mt-1">Predictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Zenelait"
            title="Everything You Need to Get Paid Faster"
            description="A complete billing platform designed to save time, reduce errors, and grow your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={item.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Work Smarter"
            title="Transform How You Bill"
            description="Let AI handle the repetitive work while you focus on growing your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, index) => (
              <div key={item.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-5" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Simplify Your Billing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of businesses already using Zenelait to streamline their invoicing and payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Start Free Trial
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
