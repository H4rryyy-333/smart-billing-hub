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
  Play,
  ArrowRight,
  CheckCircle,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI-powered Billing",
    description: "Smart templates, auto-categorization, and predictive analytics reduce manual work by 80%.",
  },
  {
    icon: Globe,
    title: "GST & Multi-currency",
    description: "Built-in compliance for GST, VAT, and international currencies. Always tax-ready.",
  },
  {
    icon: Link2,
    title: "50+ Integrations",
    description: "Seamlessly connect with CRM, ERP, Tally, QuickBooks, and payment gateways.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with 2FA, role-based access, and automated backups.",
  },
];

const valueProps = [
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
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

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "₹500Cr+", label: "Invoices Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Customer Rating" },
];

const trustedBy = [
  "TechStart Inc",
  "Acme Corp",
  "GlobalTrade",
  "StartupXYZ",
  "InnovateLabs",
];

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-60 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Billing Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Smart Billing for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Easy, fast, and AI-powered billing with GST compliance, automation, and real-time insights.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-xl shadow-primary/25 h-14 px-8 text-base">
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base border-border/60 hover:bg-muted/60">
                  <Play className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 md:mt-24 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="glass-card-elevated rounded-2xl md:rounded-3xl p-2 md:p-3 relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-hero opacity-20 blur-2xl rounded-3xl" />
              
              <div className="bg-sidebar rounded-xl md:rounded-2xl overflow-hidden relative">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-sidebar-border bg-sidebar-accent/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-accent/70" />
                    <div className="w-3 h-3 rounded-full bg-primary/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-sidebar-accent rounded-md text-xs text-sidebar-foreground/60">
                      app.zenelait.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 md:p-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
                    <div className="bg-sidebar-accent/50 rounded-xl p-4 border border-sidebar-border/50">
                      <p className="text-sidebar-foreground/50 text-xs mb-1 flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        Total Revenue
                      </p>
                      <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">₹12.4L</p>
                      <p className="text-accent text-xs mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +12.5% this month
                      </p>
                    </div>
                    <div className="bg-sidebar-accent/50 rounded-xl p-4 border border-sidebar-border/50">
                      <p className="text-sidebar-foreground/50 text-xs mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Pending
                      </p>
                      <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">₹2.8L</p>
                      <p className="text-sidebar-foreground/50 text-xs mt-1">8 invoices</p>
                    </div>
                    <div className="bg-sidebar-accent/50 rounded-xl p-4 border border-sidebar-border/50">
                      <p className="text-sidebar-foreground/50 text-xs mb-1 flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        This Month
                      </p>
                      <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">47</p>
                      <p className="text-accent text-xs mt-1">Invoices sent</p>
                    </div>
                    <div className="bg-sidebar-accent/50 rounded-xl p-4 border border-sidebar-border/50">
                      <p className="text-sidebar-foreground/50 text-xs mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI Alerts
                      </p>
                      <p className="text-sidebar-foreground text-xl md:text-2xl font-bold">3</p>
                      <p className="text-primary text-xs mt-1">Action needed</p>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-sidebar-accent/30 rounded-xl p-4 border border-sidebar-border/30 h-32 md:h-40 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 75, 90, 60, 85, 70, 95, 80].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-sm" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
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
      <section className="section-padding bg-gradient-subtle">
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
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-5" />
            <div className="absolute inset-0 glass-card-elevated rounded-3xl" />
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Ready to Simplify Your Billing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of businesses already using Zenelait to streamline their invoicing and payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-xl shadow-primary/25 h-14 px-8">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="h-14 px-8">
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