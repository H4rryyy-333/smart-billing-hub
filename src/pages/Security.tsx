import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import {
  Shield,
  Lock,
  Key,
  FileCheck,
  Cloud,
  Link2,
  CreditCard,
  Building,
  FileText,
  MessageSquare,
  Mail,
  Database,
} from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Two-Factor Authentication", description: "Extra layer of security with 2FA for all users." },
  { icon: Key, title: "Role-Based Access", description: "Control who sees what with granular permissions." },
  { icon: FileCheck, title: "Audit Logs", description: "Complete history of all actions and changes." },
  { icon: Shield, title: "GDPR & Compliance", description: "Built to meet global privacy and data standards." },
  { icon: Cloud, title: "Automated Backups", description: "Daily encrypted backups with instant recovery." },
  { icon: Database, title: "Data Encryption", description: "End-to-end encryption for all sensitive data." },
];

const integrations = [
  { icon: Building, title: "CRM, ERP & LMS", description: "Connect with Salesforce, SAP, Zoho, and more." },
  { icon: CreditCard, title: "Payment Gateways", description: "Razorpay, Stripe, PayPal, PayTM integration." },
  { icon: Link2, title: "Bank Reconciliation", description: "Automatic bank feed matching and reconciliation." },
  { icon: FileText, title: "Tally & QuickBooks", description: "Import/export data with popular accounting software." },
  { icon: MessageSquare, title: "WhatsApp Business", description: "Send invoices and reminders via WhatsApp." },
  { icon: Mail, title: "Email & SMS", description: "Automated notifications through multiple channels." },
];

export default function Security() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Security & Integrations"
            title="Enterprise-Grade Protection"
            description="Your data is safe with bank-level security and seamless integrations."
          />

          {/* Security */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Security Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
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

          {/* Integrations */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Integrations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div key={integration.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <FeatureCard
                    icon={integration.icon}
                    title={integration.title}
                    description={integration.description}
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
