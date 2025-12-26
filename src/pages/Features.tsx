import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
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
} from "lucide-react";

const billingFeatures = [
  {
    icon: FileText,
    title: "Create, Edit & Send Invoices",
    description: "Generate professional invoices in seconds with our intuitive editor.",
  },
  {
    icon: Palette,
    title: "Custom Invoice Templates",
    description: "Choose from 50+ templates or create your own branded designs.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Invoices",
    description: "Set up automatic billing cycles with smart reminders.",
  },
  {
    icon: Calculator,
    title: "GST, VAT & Tax Calculation",
    description: "Automatic tax calculations for any jurisdiction.",
  },
  {
    icon: QrCode,
    title: "QR Codes & Digital Signatures",
    description: "Add payment QR codes and legally binding digital signatures.",
  },
  {
    icon: CreditCard,
    title: "Partial & Advance Payments",
    description: "Handle deposits, installments, and flexible payment terms.",
  },
  {
    icon: Wallet,
    title: "Online Payment Integration",
    description: "Accept UPI, Razorpay, PayTM, PayPal, Stripe, and more.",
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
    title: "Smart Invoice Templates",
    description: "AI suggests the best template based on your customer and product.",
  },
  {
    icon: Tags,
    title: "Auto Category Tagging",
    description: "Automatically categorize expenses and income for easy reporting.",
  },
  {
    icon: Clock,
    title: "Late Payment Prediction",
    description: "AI predicts which invoices are at risk of late payment.",
  },
  {
    icon: TrendingUp,
    title: "Smart Pricing Recommendations",
    description: "Get AI-powered pricing suggestions based on market trends.",
  },
];

export default function Features() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Features"
            title="Everything You Need for Modern Billing"
            description="Powerful features designed to streamline your invoicing workflow and boost productivity."
          />

          {/* Core Billing */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Core Billing & Invoicing
            </h3>
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

          {/* AI Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              AI Automation
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
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
        </div>
      </section>
    </PageLayout>
  );
}
