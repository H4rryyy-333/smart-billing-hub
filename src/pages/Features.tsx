import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Palette,
  RefreshCw,
  Calculator,
  QrCode,
  PenTool,
  CreditCard,
  Wallet,
  Sparkles,
  Tags,
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const billingFeatures = [
  {
    icon: FileText,
    title: "Create, Edit & Send",
    description: "Generate professional invoices in seconds with our intuitive editor.",
  },
  {
    icon: Palette,
    title: "Custom Templates",
    description: "Choose from 50+ templates or create your own branded designs.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Billing",
    description: "Set up automatic billing cycles with smart reminders.",
  },
  {
    icon: Calculator,
    title: "Tax Calculation",
    description: "Automatic GST, VAT, and custom tax calculations.",
  },
  {
    icon: QrCode,
    title: "QR & Signatures",
    description: "Add payment QR codes and legally binding digital signatures.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Handle deposits, installments, and partial payments.",
  },
  {
    icon: Wallet,
    title: "Payment Gateways",
    description: "Accept UPI, Razorpay, Stripe, PayPal, and more.",
  },
  {
    icon: PenTool,
    title: "Custom Fields",
    description: "Add any custom data fields your business needs.",
  },
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "AI suggests the best template based on your customer and product.",
  },
  {
    icon: Tags,
    title: "Auto Categorization",
    description: "Automatically categorize expenses and income for easy reporting.",
  },
  {
    icon: Clock,
    title: "Payment Prediction",
    description: "AI predicts which invoices are at risk of late payment.",
  },
  {
    icon: TrendingUp,
    title: "Pricing Intelligence",
    description: "Get AI-powered pricing suggestions based on market trends.",
  },
];

const benefits = [
  "Reduce invoice errors by 95%",
  "Get paid 2x faster with smart reminders",
  "Save 10+ hours every week",
  "Scale from 10 to 10,000 invoices",
];

export default function Features() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader
            badge="Features"
            title="Everything You Need for Modern Billing"
            description="Powerful features designed to streamline your invoicing workflow and boost productivity."
          />

          {/* Benefits Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Billing Features */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Core Billing & Invoicing
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, send, and manage professional invoices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {billingFeatures.map((feature, index) => (
              <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-accent/10 text-accent mb-6">
                <Sparkles className="w-3 h-3" />
                AI Automation
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Let AI Handle the Repetitive Work
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI-powered features learn from your patterns and automate tedious tasks, 
                so you can focus on what matters—growing your business.
              </p>
              <div className="space-y-4 mb-8">
                {aiFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-lg shadow-primary/25">
                  See AI in Action
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="glass-card-elevated rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">AI Insights</h4>
                    <p className="text-xs text-muted-foreground">Real-time predictions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Payment Risk Analysis</span>
                      <span className="text-xs text-destructive font-medium">High Risk</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-destructive/60 h-2 rounded-full" style={{ width: "72%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">GlobalTrade invoice has 72% chance of late payment</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Revenue Trend</span>
                      <span className="text-xs text-accent font-medium">+15%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Sales up 15% compared to last quarter</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Optimal Send Time</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Send invoices on Tuesday 10 AM for faster payment</p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Try Zenelait free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-lg shadow-primary/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}